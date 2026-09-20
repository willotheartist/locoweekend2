import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticleHref } from "@/lib/articles";
import { sections, getArticleSection, type SectionId } from "@/lib/sections";
import { SectionPage } from "./SectionPage";

export function sectionMetadata(id: SectionId): Metadata {
  const section = sections.find(item => item.id === id)!;
  return {
    title: section.title,
    description: section.description,
    alternates: { canonical: section.href },
    openGraph: { title: `${section.title} · LocoWeekend`, description: section.description, url: `https://locoweekend.com${section.href}`, type: "website" },
    twitter: { card: "summary", title: `${section.title} · LocoWeekend`, description: section.description },
  };
}
export function EditorialSectionPage({ id, children }: { id: SectionId; children?: React.ReactNode }) {
  const section = sections.find(item => item.id === id)!;
  const articles = getAllArticles().filter(article => getArticleSection(article).id === id);
  const structuredData = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: section.title, description: section.description, url: `https://locoweekend.com${section.href}`,
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://locoweekend.com/" },
      { "@type": "ListItem", position: 2, name: section.title, item: `https://locoweekend.com${section.href}` },
    ] },
    mainEntity: { "@type": "ItemList", numberOfItems: articles.length, itemListElement: articles.map((article, index) => ({
      "@type": "ListItem", position: index + 1, name: article.title, url: `https://locoweekend.com${getArticleHref(article)}`,
    })) },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <SectionPage title={section.title} description={section.description} articles={articles} breadcrumb={<nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">{section.title}</span></nav>}>
      {children}
    </SectionPage>
  </>;
}
