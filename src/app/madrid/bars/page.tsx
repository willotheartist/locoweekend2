import type { Metadata } from "next";
import Link from "next/link";
import { getArticleBySlug, getArticleHref } from "@/lib/articles";
import madridBars from "@/lib/madrid-bars.json";

const title = "Madrid Bars: Cocktail Bars, Wine Bars & Where to Go";
const description = "Find your kind of night in Madrid. Explore our guides to must-visit bars, cocktail bars and wine bars, then plan the rest of your evening by neighbourhood.";
const url = "https://locoweekend.com/madrid/bars";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website", siteName: "LocoWeekend" },
  twitter: { card: "summary", title, description },
};
const introductions: Record<string, { label: string; description: string }> = {
  "must-visit-bars-in-madrid": { label: "Start here", description: "Seven addresses with different personalities, from La Santoria and Fun Fun to La Venencia. A sourced shortlist with addresses, neighbourhood pairings and practical FAQs." },
  "best-cocktail-bars-in-madrid-right-now": { label: "Cocktails", description: "Make the drink the main event. Explore the cocktail-focused guide and choose a bar to build your evening around." },
  "best-wine-bars-in-madrid-right-now": { label: "Wine bars", description: "For an evening organised around a bottle, a glass and somewhere to linger. Explore our Madrid wine-bar guide." },
};
export default function MadridBarsPage() {
  const articles = Object.keys(madridBars).flatMap((slug) => {
    const article = getArticleBySlug(slug);
    return article ? [article] : [];
  });
  const schema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": url, url, name: title, description,
      isPartOf: { "@type": "CollectionPage", "@id": "https://locoweekend.com/madrid", name: "Madrid" },
      mainEntity: { "@type": "ItemList", numberOfItems: articles.length, itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.title, url: `https://locoweekend.com${getArticleHref(article)}` })) } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://locoweekend.com/" },
      { "@type": "ListItem", position: 2, name: "Madrid", item: "https://locoweekend.com/madrid" },
      { "@type": "ListItem", position: 3, name: "Bars", item: url },
    ] },
  ];
  return (
    <div className="page-shell section-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="collection-header">
        <nav className="eyebrow" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/madrid">Madrid</Link> / <span aria-current="page">Bars</span></nav>
        <h1>Madrid bars</h1>
        <p className="deck">A cocktail worth crossing town for. A bottle worth staying put for. Find your kind of Madrid night.</p>
      </header>
      <section className="collection-stories" aria-labelledby="bar-guides">
        <h2 id="bar-guides" className="text-3xl mb-8">Choose your evening</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="border-t border-current pt-6 pb-8">
              <p className="eyebrow mb-4">{introductions[article.slug].label}</p>
              <h3 className="text-3xl mb-4"><Link href={getArticleHref(article)}>{article.title}</Link></h3>
              <p className="mb-6 leading-relaxed">{introductions[article.slug].description}</p>
              <Link className="read-link" href={getArticleHref(article)}>Explore the guide <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-current py-10 max-w-3xl" aria-labelledby="plan-night">
        <h2 id="plan-night" className="text-3xl mb-4">Put the night on the map</h2>
        <p className="leading-relaxed mb-4">Start with the must-visit guide for a mix of cocktails, wine, sherry and music history. Use the specialist guides when you already know what you want to drink. Pick a first stop, then use its neighbourhood to shape the rest of the evening.</p>
        <p className="leading-relaxed">Our <Link className="underline" href="/articles/best-neighbourhoods-in-madrid-for-a-weekend">Madrid neighbourhood guide</Link> helps connect a night out with where you stay. For cafés, bookshops and the rest of the weekend, return to the <Link className="underline" href="/madrid">Madrid city guide</Link>.</p>
      </section>
    </div>
  );
}
