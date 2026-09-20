import { notFound } from "next/navigation";
import { ArticlePageView, buildMetadataForArticle } from "@/components/site/ArticlePageView";
import { getArticleBySlug } from "@/lib/articles";
import madridBars from "@/lib/madrid-bars.json";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.values(madridBars).map((slug) => ({ slug }));
}
function getArticle(slug: string) {
  const entry = Object.entries(madridBars).find(([, child]) => child === slug);
  const article = entry ? getArticleBySlug(entry[0]) : undefined;
  if (!article) notFound();
  return article;
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return buildMetadataForArticle(getArticle((await params).slug));
}
export default async function MadridBarArticle({ params }: { params: Promise<{ slug: string }> }) {
  return <ArticlePageView article={getArticle((await params).slug)} />;
}
