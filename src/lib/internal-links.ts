import { getAllArticles } from "./articles";

const MAX_LINKS = 3;

// Common words that shouldn't anchor a link on their own.
const STOP = new Set([
  "the","and","for","with","that","this","from","your","into","right","now",
  "take","takes","took","still","best","top","new","are","was","were","its",
]);

export interface AddedLink { slug: string; anchor: string; }

export interface LinkSubject {
  slug: string; title: string; subtitle?: string; excerpt: string;
  category: string; city: string;
}

function terms(s: string): string[] {
  return s.toLowerCase().split(/[^a-z0-9£]+/i).filter((t) => t.length > 3);
}

// Candidate anchors from a title: capitalised runs broken into 2-3 word phrases
// (band names, venues, labels). Longest first so the most specific wins.
function keyPhrases(title: string): string[] {
  const runs = title.match(/[A-Z][\w'&]+(?:\s+[A-Z][\w'&]+)+/g) || [];
  const out = new Set<string>();
  for (const run of runs) {
    const words = run.split(/\s+/);
    for (let n = Math.min(3, words.length); n >= 2; n--) {
      for (let i = 0; i + n <= words.length; i++) {
        const phrase = words.slice(i, i + n).join(" ");
        const hasContent = phrase.split(" ").some((w) => !STOP.has(w.toLowerCase()) && w.length > 3);
        if (hasContent) out.add(phrase);
      }
    }
  }
  return Array.from(out).sort((a, b) => b.length - a.length);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Link the first clean occurrence: not on a heading or blockquote line, not
// already inside an existing markdown link.
function linkFirst(body: string, phrase: string, url: string): string | null {
  const lines = body.split("\n");
  const re = new RegExp(`(?<![\\[\\w])${escapeRegExp(phrase)}(?![\\w\\]])`);
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trimStart();
    if (t.startsWith("#") || t.startsWith(">")) continue;
    const m = lines[i].match(re);
    if (!m || m.index === undefined) continue;
    const before = lines[i].slice(0, m.index);
    if ((before.match(/\[/g) || []).length > (before.match(/\]/g) || []).length) continue;
    lines[i] = before + `[${phrase}](${url})` + lines[i].slice(m.index + phrase.length);
    return lines.join("\n");
  }
  return null;
}

export function addInternalLinks(body: string, current: LinkSubject): { body: string; links: AddedLink[] } {
  const catalogue = getAllArticles().filter((a) => a.slug !== current.slug);
  const ct = new Set([...terms(current.title), ...terms(current.subtitle || ""), ...terms(current.excerpt)]);

  const scored = catalogue
    .map((a) => {
      let score = 0;
      if (a.category === current.category) score += 4;
      if (a.city === current.city) score += 3;
      for (const t of terms(`${a.title} ${a.subtitle || ""} ${a.excerpt}`)) if (ct.has(t)) score += 0.5;
      return { a, score };
    })
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score);

  let working = body;
  const links: AddedLink[] = [];
  const used = new Set<string>();

  for (const { a } of scored) {
    if (links.length >= MAX_LINKS) break;
    if (used.has(a.slug)) continue;
    for (const phrase of keyPhrases(a.title)) {
      const next = linkFirst(working, phrase, `/articles/${a.slug}`);
      if (next) { working = next; links.push({ slug: a.slug, anchor: phrase }); used.add(a.slug); break; }
    }
  }
  return { body: working, links };
}
