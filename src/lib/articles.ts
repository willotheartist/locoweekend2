// src/lib/articles.ts
import fs from "fs";
import path from "path";

export interface ArticleMeta {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  city: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

/**
 * Extract `export const meta = { ... }` from an MDX file.
 */
function extractMeta(source: string): Record<string, unknown> | null {
  // ✅ More tolerant: doesn't require a newline before the closing brace
  //    and allows an optional trailing semicolon.
  const match = source.match(
    /export\s+const\s+meta\s*=\s*(\{[\s\S]*?\})\s*;?/m
  );
  if (!match) return null;

  try {
    return new Function(`return ${match[1]}`)() as Record<string, unknown>;
  } catch {
    return null;
  }
}

/**
 * Get all articles, sorted by date (newest first).
 */
export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = [];

  if (!fs.existsSync(ARTICLES_DIR)) return articles;

  const entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const cityDir = path.join(ARTICLES_DIR, entry.name);
    const files = fs.readdirSync(cityDir);

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;

      const raw = fs.readFileSync(path.join(cityDir, file), "utf-8");
      const meta = extractMeta(raw);

      if (!meta || !meta.title) continue;

      articles.push({
        slug: (meta.slug as string) || path.basename(file, ".mdx"),
        title: meta.title as string,
        subtitle: (meta.subtitle as string) || undefined,
        excerpt: (meta.excerpt as string) || "",
        city: (meta.city as string) || entry.name,
        category: (meta.category as string) || "Culture",
        author: (meta.author as string) || "LocoWeekend",
        date: (meta.date as string) || "2026-01-01",
        readTime: (meta.readTime as string) || "5 min",
        image: (meta.image as string) || undefined,
        featured: meta.featured === true,
      });
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single article by slug.
 */
export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

/**
 * Find the MDX file path for a given slug.
 */
export function getArticlePath(slug: string): string | null {
  if (!fs.existsSync(ARTICLES_DIR)) return null;

  const entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const cityDir = path.join(ARTICLES_DIR, entry.name);
    const files = fs.readdirSync(cityDir);

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;
      const fileSlug = path.basename(file, ".mdx");

      if (fileSlug === slug) return `${entry.name}/${file}`;

      const raw = fs.readFileSync(path.join(cityDir, file), "utf-8");
      const meta = extractMeta(raw);
      if (meta && meta.slug === slug) return `${entry.name}/${file}`;
    }
  }

  return null;
}
