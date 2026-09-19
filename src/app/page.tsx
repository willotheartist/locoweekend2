import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllArticles,
  getArticleHref,
  type ArticleMeta,
} from "@/lib/articles";
import {
  Byline,
  categoryName,
  SectionHeading,
  StoryCard,
  StoryImage,
} from "@/components/site/Editorial";

export const metadata: Metadata = {
  title: "LocoWeekend · Culture, Affairs, & anything interesting",
  description:
    "Independent street magazine covering culture, affairs, film, food, cities, and anything interesting.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "LocoWeekend · Culture, Affairs & Anything Interesting",
    description:
      "Independent street magazine covering culture, affairs, film, food, cities, and anything interesting.",
    url: "https://locoweekend.com/",
    siteName: "LocoWeekend",
    type: "website",
    images: [
      {
        url: "https://locoweekend.com/LWICON.png",
        width: 1200,
        height: 630,
        alt: "LocoWeekend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LocoWeekend · Culture, Affairs & Anything Interesting",
    description:
      "Independent street magazine covering culture, affairs, film, food, cities, and anything interesting.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

function select(articles: ArticleMeta[], slugs: string[]) {
  return slugs.flatMap((slug) => {
    const article = articles.find((item) => item.slug === slug);
    return article ? [article] : [];
  });
}

export default function HomePage() {
  const articles = getAllArticles();
  const lead =
    articles.find(
      (article) => article.slug === "too-good-for-tourists",
    ) || articles[0];
  const picks = select(articles, [
    "the-bar-you-only-find-twice",
    "placebo-are-still-here",
    "english-teacher-join-victoria-park-bill",
    "how-long-does-it-take-to-build-an-mvp-uk-2026",
  ]);
  const secondary = select(articles, [
    "hawala-the-invisible-bank",
    "the-hotel-lobby-as-coworking-space",
  ]);
  const latest = articles
    .filter(
      (article) =>
        ![lead.slug, ...picks.map((pick) => pick.slug)].includes(article.slug),
    )
    .slice(0, 5);
  const culture = select(articles, [
    "yard-act-take-november-english-teacher-takes-the-support-slot",
    "welcome-to-the-beige-empire",
    "the-netflix-effect",
    "why-menswear-is-suddenly-interesting-again",
  ]);
  const business = select(articles, [
    "best-ai-app-development-companies-uk-2026",
    "best-web-app-development-companies-uk-2026",
    "best-uk-digital-product-companies-2026",
    "freelancer-vs-agency-vs-in-house-mvp-uk-2026",
  ]);
  const afterHours = select(articles, [
    "the-22-pound-smash-burger-problem",
    "best-natural-wine-bars-in-europe",
    "best-hotel-lobby-bars-in-europe",
    "best-breakfast-spots-in-madrid-right-now",
  ]);
  const affairs = select(articles, [
    "the-passport-economy",
    "the-greenland-question",
    "lebanons-infinite-crisis-explained",
  ]);
  const cities = select(articles, [
    "best-neighbourhoods-in-lisbon-for-a-weekend",
    "best-neighbourhoods-in-madrid-for-a-weekend",
  ]);
  return (
    <div className="page-shell home-page">
      <div className="edition-line">
        <span>Independent minds. Interesting times.</span>
        <span>London / Everywhere</span>
      </div>
      <div className="front-page">
        <section className="front-picks" aria-labelledby="picks-heading">
          <SectionHeading id="picks-heading">Editor’s picks</SectionHeading>
          <div className="picks-list">
            {picks.map((article) => (
              <StoryCard
                key={article.slug}
                article={article}
                variant="compact"
              />
            ))}
          </div>
        </section>
        <section className="front-lead" aria-label="The cover story">
          <div className="lead-rule">
            <span>The big read</span>
          </div>
          <article>
            <div className="lead-copy">
              <p className="eyebrow">
                {categoryName(lead.category)} / {lead.city}
              </p>
              <Link href={getArticleHref(lead)}>
                <h1>{lead.title}</h1>
              </Link>
              <p className="deck">{lead.subtitle || lead.excerpt}</p>
              <Byline article={lead} />
            </div>
            <Link href={getArticleHref(lead)} className="lead-image-link">
              <StoryImage
                article={lead}
                priority
                sizes="(min-width: 1600px) 780px, (min-width: 1000px) 48vw, 100vw"
              />
            </Link>
          </article>
          <div className="lead-secondary">
            {secondary.map((article) => (
              <StoryCard key={article.slug} article={article} variant="text" />
            ))}
          </div>
        </section>
        <aside className="front-latest" aria-labelledby="latest-heading">
          <SectionHeading id="latest-heading">The latest</SectionHeading>
          <div className="latest-list">
            {latest.map((article) => (
              <StoryCard key={article.slug} article={article} variant="text" />
            ))}
          </div>
          <Link href="/the-sauce" className="sauce-promo">
            <span className="eyebrow">The LocoWeekend edit</span>
            <strong>
              THE
              <br />
              SAUCE<span aria-hidden="true">↗</span>
            </strong>
            <p>
              Fresh stories.
              <br />A little more bite.
            </p>
          </Link>
        </aside>
      </div>
      <section className="home-section" aria-labelledby="culture-heading">
        <SectionHeading id="culture-heading" href="/culture">
          Culture
        </SectionHeading>
        <div className="story-grid">
          {culture.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <section className="cities-section" aria-labelledby="cities-heading">
        <div className="cities-intro">
          <p className="eyebrow">Out of office</p>
          <h2 id="cities-heading">
            Know the city.
            <br />
            Skip the obvious.
          </h2>
          <p className="deck">Streets, tables and places worth finding.</p>
          <Link href="/travel" className="read-link">
            Explore our city guides ↗
          </Link>
        </div>
        <div className="city-stories">
          {cities.map((article) => (
            <article key={article.slug}>
              <Link href={getArticleHref(article)}>
                <StoryImage article={article} />
                <p className="eyebrow">{article.city}</p>
                <h3>{article.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section" aria-labelledby="business-heading">
        <SectionHeading id="business-heading" href="/business">
          Business & technology
        </SectionHeading>
        <div className="story-grid">
          {business.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <section className="home-section" aria-labelledby="affairs-heading">
        <SectionHeading id="affairs-heading" href="/affairs">
          A wider lens
        </SectionHeading>
        <div className="story-grid story-grid--three">
          {affairs.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <section className="home-section" aria-labelledby="after-hours-heading">
        <SectionHeading id="after-hours-heading" href="/drinks">
          After hours
        </SectionHeading>
        <div className="story-grid">
          {afterHours.map((article) => (
            <StoryCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <div className="archive-banner">
        <span className="eyebrow">Still curious?</span>
        <Link href="/magazine">
          There’s more where that came from.<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
