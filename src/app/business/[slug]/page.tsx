import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage, {
  generateMetadata as generateBaseMetadata,
} from "@/app/articles/[slug]/page";
import {
  getAllArticles,
  getArticleBySlug,
  isBusinessArticle,
} from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles()
    .filter((article) => isBusinessArticle(article))
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !isBusinessArticle(article)) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return generateBaseMetadata({ params: Promise.resolve({ slug }) });
}

export default async function BusinessArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !isBusinessArticle(article)) notFound();

  return ArticlePage({ params: Promise.resolve({ slug }) });
}
