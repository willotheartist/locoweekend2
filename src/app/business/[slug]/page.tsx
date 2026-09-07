import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticlePageView,
  buildMetadataForArticle,
} from "@/components/site/ArticlePageView";
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

  return buildMetadataForArticle(article);
}

export default async function BusinessArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !isBusinessArticle(article)) notFound();

  return <ArticlePageView article={article} />;
}
