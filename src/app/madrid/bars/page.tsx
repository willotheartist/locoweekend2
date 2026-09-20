import { notFound } from "next/navigation";
import { ArticlePageView, buildMetadataForArticle } from "@/components/site/ArticlePageView";
import { getArticleBySlug } from "@/lib/articles";

const slug = "must-visit-bars-in-madrid";

export function generateMetadata() {
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return buildMetadataForArticle(article);
}

export default function MadridBarsPage() {
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <ArticlePageView article={article} />;
}
