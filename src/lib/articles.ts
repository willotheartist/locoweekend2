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
  updatedAt?: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");
const SITE_URL = "https://locoweekend.com";

const BUSINESS_TOPIC_DEFINITIONS = [
  {
    id: "mvp",
    terms: [
      " mvp ",
      " minimum viable product ",
      " prototype ",
      " proof of concept ",
      " freelancer vs agency ",
    ],
  },
  {
    id: "saas",
    terms: [" saas ", " software as a service ", " multi tenant ", " multi tenancy "],
  },
  {
    id: "ai",
    terms: [
      " ai ",
      " artificial intelligence ",
      " llm ",
      " rag ",
      " agentic ",
      " generative ai ",
    ],
  },
  {
    id: "web-apps",
    terms: [" web app ", " web apps ", " web application ", " web applications "],
  },
  {
    id: "custom-software",
    terms: [" custom software ", " bespoke software ", " software development company "],
  },
  {
    id: "apps",
    terms: [
      " app development ",
      " mobile app ",
      " mobile apps ",
      " react native ",
      " ios app ",
      " android app ",
    ],
  },
  {
    id: "marketplaces",
    terms: [" marketplace ", " marketplaces ", " two sided platform ", " two sided marketplace "],
  },
  {
    id: "digital-products",
    terms: [" digital product ", " product company ", " product studio ", " product development "],
  },
] as const;

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

function normaliseAuthor(author?: string): string {
  if (!author) return "LocoWeekend";
  return author === "Wills Mayani" ? "Patrick Duroy" : author;
}

function normaliseTopicText(article: Pick<ArticleMeta, "slug" | "title" | "subtitle" | "excerpt">) {
  return ` ${`${article.slug} ${article.title} ${article.subtitle ?? ""} ${article.excerpt}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()} `;
}

export function getBusinessTopics(
  article: Pick<ArticleMeta, "slug" | "title" | "subtitle" | "excerpt">
): string[] {
  const text = normaliseTopicText(article);

  return BUSINESS_TOPIC_DEFINITIONS.filter(({ terms }) =>
    terms.some((term) => text.includes(term))
  ).map(({ id }) => id);
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
        author: normaliseAuthor(meta.author as string | undefined),
        date: (meta.date as string) || "2026-01-01",
        updatedAt: (meta.updatedAt as string) || undefined,
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

export function isBusinessArticle(article: Pick<ArticleMeta, "category">): boolean {
  const category = article.category.toLowerCase();
  return category === "business" || category === "tech";
}

export function getArticleHref(article: Pick<ArticleMeta, "slug" | "category">): string {
  return isBusinessArticle(article)
    ? `/business/${article.slug}`
    : `/articles/${article.slug}`;
}

export function getArticleUrl(slug: string): string {
  const article = getArticleBySlug(slug);
  const href = article ? getArticleHref(article) : `/articles/${slug}`;
  return `${SITE_URL}${href}`;
}

export function getAbsoluteImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${SITE_URL}${image}`;
}

function relatedScore(current: ArticleMeta, article: ArticleMeta) {
  let score = 0;
  const currentIsBusiness = isBusinessArticle(current);

  if (article.category === current.category) score += 4;
  if (!currentIsBusiness && article.city === current.city) score += 3;

  if (currentIsBusiness && isBusinessArticle(article)) {
    score += 8;

    const currentTopics = new Set(getBusinessTopics(current));
    const articleTopics = getBusinessTopics(article);
    const sharedTopics = articleTopics.filter((topic) => currentTopics.has(topic));

    score += sharedTopics.length * 14;

    const currentIsComparison = current.slug.startsWith("best-");
    const articleIsComparison = article.slug.startsWith("best-");
    if (currentIsComparison === articleIsComparison) score += 1;

    const currentIsCost = current.slug.includes("how-much") || current.slug.includes("cost");
    const articleIsCost = article.slug.includes("how-much") || article.slug.includes("cost");
    if (currentIsCost === articleIsCost) score += 1;
  }

  const currentTerms = Array.from(
    new Set(
      `${current.title} ${current.subtitle ?? ""} ${current.excerpt}`
        .toLowerCase()
        .split(/[^a-z0-9£]+/i)
        .filter((term) => term.length > 3 && !/^\d+$/.test(term))
    )
  );

  const articleText = `${article.title} ${article.subtitle ?? ""} ${article.excerpt}`.toLowerCase();

  for (const term of currentTerms) {
    if (articleText.includes(term)) score += 0.35;
  }

  return score;
}

export function getRelatedArticles(
  current: ArticleMeta,
  limit = 4
): ArticleMeta[] {
  const currentIsBusiness = isBusinessArticle(current);
  const all = getAllArticles().filter(
    (article) =>
      article.slug !== current.slug &&
      (!currentIsBusiness || isBusinessArticle(article))
  );

  return all
    .map((article) => ({ article, score: relatedScore(current, article) }))
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
  if (isBusinessArticle(current)) {
    return getRelatedArticles(current, limit * 2).slice(limit, limit * 2);
  }

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
