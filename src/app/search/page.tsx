import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionHeading, StoryCard } from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = (typeof params.q === "string" ? params.q : "")
    .trim()
    .slice(0, 120);
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const articles = getAllArticles();
  const results = terms.length
    ? articles.filter((article) => {
        const text =
          `${article.title} ${article.subtitle || ""} ${article.excerpt} ${article.city} ${article.category} ${article.author}`.toLowerCase();
        return terms.every((term) => text.includes(term));
      })
    : [];
  return (
    <div className="page-shell search-page">
      <header className="collection-header">
        <p className="eyebrow">The LocoWeekend archive</p>
        <h1>Search</h1>
        <form action="/search" method="get" className="search-form">
          <label htmlFor="archive-search" className="sr-only">
            Search articles
          </label>
          <input
            id="archive-search"
            name="q"
            type="search"
            defaultValue={query}
            maxLength={120}
            placeholder="What are you curious about?"
          />
          <button type="submit">Search ↗</button>
        </form>
      </header>
      <SectionHeading>
        {query
          ? `${results.length} ${results.length === 1 ? "story" : "stories"} for “${query}”`
          : "A few places to start"}
      </SectionHeading>
      {query && !results.length ? (
        <div className="empty-state">
          <h2>Nothing here yet.</h2>
          <p className="deck">Try a city, a subject, or fewer words.</p>
        </div>
      ) : (
        <div className="story-grid">
          {(query ? results : articles.slice(0, 8)).map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
