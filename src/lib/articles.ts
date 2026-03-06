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
const SITE_URL = "https://locoweekend.com";

function extractMeta(source: string): Record<string, unknown> | null {
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

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

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

export function getArticleUrl(slug: string): string {
  return `${SITE_URL}/articles/${slug}`;
}

export function getAbsoluteImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${SITE_URL}${image}`;
}

export function getRelatedArticles(
  current: ArticleMeta,
  limit = 4
): ArticleMeta[] {
  const all = getAllArticles().filter((a) => a.slug !== current.slug);

  return all
    .map((article) => {
      let score = 0;

      if (article.category === current.category) score += 4;
      if (article.city === current.city) score += 3;

      const currentTerms = `${current.title} ${current.subtitle ?? ""} ${current.excerpt}`
        .toLowerCase()
        .split(/[^a-z0-9£]+/i)
        .filter((t) => t.length > 3);

      const articleText = `${article.title} ${article.subtitle ?? ""} ${article.excerpt}`.toLowerCase();

      for (const term of currentTerms) {
        if (articleText.includes(term)) score += 0.5;
      }

      return { article, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.article.date).getTime() - new Date(a.article.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.article);
}

export function getRecommendedArticles(
  current: ArticleMeta,
  limit = 4
): ArticleMeta[] {
  const relatedSlugs = new Set(getRelatedArticles(current, limit).map((a) => a.slug));

  return getAllArticles()
    .filter((a) => a.slug !== current.slug && !relatedSlugs.has(a.slug))
    .slice(0, limit);
}

export function buildArticleTitle(article: ArticleMeta): string {
  return article.subtitle ? `${article.title}: ${article.subtitle}` : article.title;
}

export function buildArticleDescription(article: ArticleMeta): string {
  return article.excerpt;
}