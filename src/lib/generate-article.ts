import Anthropic from "@anthropic-ai/sdk";
import { LOCO_HOUSE_STYLE } from "./loco-voice";
import { addInternalLinks, type AddedLink } from "./internal-links";

const anthropic = new Anthropic();

export interface GenerateInput {
  source: string;
  city?: string;
  category?: string;
  author?: string;
  format?: "announcement" | "whats-on" | "reception-roundup";
  model?: string;
}

export interface GenerateResult {
  mdx: string;
  slug: string;
  meta: Record<string, string>;
  links: AddedLink[];
}

const FORMAT_BRIEFS: Record<NonNullable<GenerateInput["format"]>, string> = {
  announcement:
    "A news brief: a band/album/tour/festival has announced something. Report what " +
    "was announced and give it the LocoWeekend angle. You did NOT attend anything and " +
    "have NOT heard any unreleased music; do not imply otherwise.",
  "whats-on":
    "A curated 'what's on' note framing a handful of upcoming gigs/events from the " +
    "source. Curate with attitude. Every event detail must come from the source.",
  "reception-roundup":
    "A round-up of how something was received, aggregating and ATTRIBUTING what named " +
    "critics/outlets in the source actually said. Never invent a quote or an outlet.",
};

function buildSystemPrompt(format: NonNullable<GenerateInput["format"]>): string {
  return `${LOCO_HOUSE_STYLE}

THIS PIECE - ${FORMAT_BRIEFS[format]}

TITLES: keep the title short and sharp - six words or fewer, like a magazine
headline. Put the cleverness in the subtitle, not the title.

GROUNDING RULES (non-negotiable - this is about writing about real people):
- Treat the SOURCE block as the ONLY source of fact. Do not use anything you happen
  to know about the artist, label, venue or event from elsewhere.
- Every factual claim - dates, venue names, cities, support acts, ticket on-sale
  times, prices, album/track titles, label names - must appear in the SOURCE. If it
  is not in the SOURCE, do not state it. Write around the gap; never fill it.
- Never invent a quote. Only include a quotation if it is present in the SOURCE.
- Do NOT write any markdown links yourself. Linking is handled after you write.

OUTPUT FORMAT - respond with ONE JSON object and nothing else. No prose before or
after, no markdown code fences. Shape:
{
  "title": "string - sharp, specific, six words or fewer",
  "subtitle": "string - one line, the angle",
  "excerpt": "string - 1-2 sentences, the hook, in voice",
  "body": "string - the article in MDX/markdown. Start with the opening paragraph
           (NO H1, NO title repeated). Use ## for wry section headers. British spelling."
}`;
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80);
}

function readTime(body: string): string {
  return `${Math.max(1, Math.round(body.trim().split(/\s+/).length / 200))} min`;
}

function parseModelJson(text: string): { title: string; subtitle: string; excerpt: string; body: string } {
  const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON object found in model output.");
  const parsed = JSON.parse(cleaned.slice(start, end + 1));
  for (const key of ["title", "subtitle", "excerpt", "body"]) {
    if (typeof parsed[key] !== "string" || !parsed[key].trim()) throw new Error(`Missing field: ${key}`);
  }
  return parsed;
}

export async function generateArticle(input: GenerateInput): Promise<GenerateResult> {
  const { source, city = "Europe", category = "Music", author = "LocoWeekend",
          format = "announcement", model = "claude-sonnet-4-6" } = input;

  if (!source || !source.trim()) throw new Error("generateArticle: 'source' is required.");

  const message = await anthropic.messages.create({
    model, max_tokens: 2000, system: buildSystemPrompt(format),
    messages: [{ role: "user",
      content: `SOURCE:\n"""\n${source.trim()}\n"""\n\nWrite the piece. Only facts from the SOURCE. Respond with the JSON object only.` }],
  });

  const text = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text).join("\n");

  const { title, subtitle, excerpt, body } = parseModelJson(text);
  const slug = slugify(title);

  // Internal linking: only ever links to real, existing slugs.
  const { body: linkedBody, links } = addInternalLinks(body, { slug, title, subtitle, excerpt, city, category });

  const meta: Record<string, string> = {
    title, subtitle, excerpt, slug, city, category, author,
    date: new Date().toISOString().slice(0, 10),
    readTime: readTime(body),
  };

  const metaLines = Object.entries(meta).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n");
  const mdx = `export const meta = {\n${metaLines}\n}\n\n${linkedBody.trim()}\n`;

  return { mdx, slug, meta, links };
}
