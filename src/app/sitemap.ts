import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

const SITE_URL = "https://locoweekend.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/culture",
    "/affairs",
    "/fashion",
    "/travel",
    "/guides",
    "/politics",
    "/magazine",
    "/the-sauce",
    "/dead-stock",
    "/drinks",
    "/grub",
    "/flicks",
    "/art",
    "/picks",
    "/shop",
    "/lisbon",
    "/subscribe",
    "/signin",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/lisbon" ? 0.9 : 0.8,
  }));

  const articleEntries = getAllArticles().map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: article.city.toLowerCase() === "lisbon" ? 0.85 : 0.75,
  }));

  return [...staticEntries, ...articleEntries];
}
