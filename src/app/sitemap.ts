// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { articleIndex } from "@/content/articles";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://locoweekend.com"
).replace(/\/+$/, "");

const now = new Date();

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/magazine", priority: 0.95, changeFrequency: "daily" },
  { path: "/the-sauce", priority: 0.9, changeFrequency: "daily" },
  { path: "/picks", priority: 0.85, changeFrequency: "daily" },

  { path: "/culture", priority: 0.8, changeFrequency: "weekly" },
  { path: "/affairs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fashion", priority: 0.8, changeFrequency: "weekly" },
  { path: "/travel", priority: 0.8, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
  { path: "/politics", priority: 0.75, changeFrequency: "weekly" },

  { path: "/art", priority: 0.7, changeFrequency: "weekly" },
  { path: "/drinks", priority: 0.7, changeFrequency: "weekly" },
  { path: "/flicks", priority: 0.7, changeFrequency: "weekly" },
  { path: "/grub", priority: 0.7, changeFrequency: "weekly" },
  { path: "/dead-stock", priority: 0.7, changeFrequency: "weekly" },

  { path: "/lisbon", priority: 0.8, changeFrequency: "weekly" },
  { path: "/madrid", priority: 0.8, changeFrequency: "weekly" },

  { path: "/subscribe", priority: 0.5, changeFrequency: "monthly" },
  { path: "/shop", priority: 0.4, changeFrequency: "monthly" },
];

// Keep this loose so it works with your current article shape.
type SitemapArticle = {
  slug: string;
  date?: string;
  publishedAt?: string;
  updatedAt?: string;
  lastModified?: string;
};

function toAbsoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function getArticleLastModified(article: SitemapArticle) {
  const raw =
    article.updatedAt ||
    article.lastModified ||
    article.publishedAt ||
    article.date;

  const parsed = raw ? new Date(raw) : now;
  return Number.isNaN(parsed.getTime()) ? now : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteUrl(route.path || "/"),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = (articleIndex as SitemapArticle[])
    .filter((article) => article.slug)
    .map((article) => ({
      url: toAbsoluteUrl(`/articles/${article.slug}`),
      lastModified: getArticleLastModified(article),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticEntries, ...articleEntries];
}