import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
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
    .filter((article) => !isBusinessArticle(article))
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadataForArticle(article);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  if (isBusinessArticle(article)) {
    permanentRedirect(`/business/${article.slug}`);
  }

  return <ArticlePageView article={article} />;
}
