import { notFound } from "next/navigation";
import { ArticlePageView, buildMetadataForArticle } from "@/components/site/ArticlePageView";
import { getArticleBySlug } from "@/lib/articles";
import routes from "@/lib/watch-routes.json";
export const dynamicParams=false;
export function generateStaticParams(){return Object.values(routes).map(path=>({path:path.split("/")}));}
function articleFor(path:string[]){const entry=Object.entries(routes).find(([,route])=>route===path.join("/"));const article=entry?getArticleBySlug(entry[0]):undefined;if(!article)notFound();return article;}
export async function generateMetadata({params}:{params:Promise<{path:string[]}>}){return buildMetadataForArticle(articleFor((await params).path));}
export default async function WatchArticle({params}:{params:Promise<{path:string[]}>}){return <ArticlePageView article={articleFor((await params).path)}/>;}
