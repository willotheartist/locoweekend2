// src/app/culture/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articleIndex } from "@/content/articles";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Culture at LocoWeekend: essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
  alternates: {
    canonical: "/culture",
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
    title: "Culture · LocoWeekend",
    description:
      "Essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
    url: "https://locoweekend.com/culture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Culture · LocoWeekend",
    description:
      "Essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
  },
};

const CULTURE_CATEGORIES = new Set(["culture", "flicks"]);

function isCultureArticle(category: string) {
  return CULTURE_CATEGORIES.has(category.toLowerCase());
}

function formatCategory(category: string) {
  return category === "Flicks" ? "Film" : category;
}

export default function CulturePage() {
  const articles = articleIndex
    .filter((a) => isCultureArticle(a.category))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const featured = articles[0];
  const lead = articles.slice(1, 4);
  const grid = articles.slice(4);

  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Culture — Essays, Film, Fashion and Urban Life</h1>
        <p>Culture at LocoWeekend: essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.</p>
        <nav>
          <a href="/">Home</a>
          <a href="/magazine">Magazine</a>
          <a href="/the-sauce">The Sauce</a>
          <a href="/culture">Culture</a>
          <a href="/affairs">Affairs</a>
          <a href="/fashion">Fashion</a>
          <a href="/travel">Travel</a>
          <a href="/guides">Guides</a>
          <a href="/politics">Politics</a>
          <a href="/art">Art</a>
          <a href="/drinks">Drinks</a>
          <a href="/flicks">Flicks</a>
          <a href="/grub">Grub</a>
          <a href="/dead-stock">Dead Stock</a>
          <a href="/picks">Picks</a>
          <a href="/lisbon">Lisbon</a>
          <a href="/madrid">Madrid</a>
          <a href="/subscribe">Subscribe</a>
        </nav>
      </div>
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-12">
      <header className="border-b border-grey-line pb-8">
        <div className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-grey-text">
          LocoWeekend / Culture
        </div>

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
          Culture
        </h1>

        <p className="mt-4 max-w-3xl font-crimson text-[20px] leading-normal tracking-[-0.01em] text-grey-dark">
          Essays, film, fashion, media, city moods, and the strange details that
          reveal what a place is really becoming.
        </p>
      </header>

      {featured ? (
        <section
          aria-labelledby="culture-featured-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-8 border-b border-grey-line"
        >
          <div className="lg:col-span-7">
            <Link
              href={`/articles/${featured.slug}`}
              aria-label={`Read featured culture article: ${featured.title}`}
              className="block no-underline group"
            >
              <div className="relative overflow-hidden bg-grey-line/30 aspect-video">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.18em] uppercase text-grey-text">
                    {featured.city}
                  </div>
                )}
              </div>
            </Link>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 flex-wrap font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-grey-text">
              <span>{featured.city}</span>
              <span className="text-grey-line">|</span>
              <span>{formatCategory(featured.category)}</span>
              <span className="text-grey-line">|</span>
              <span>{featured.readTime} read</span>
            </div>

            <Link
              href={`/articles/${featured.slug}`}
              className="block no-underline group mt-4"
            >
              <h2
                id="culture-featured-heading"
                className="font-serif text-[2rem] sm:text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.02em] text-ink group-hover:underline decoration-1 underline-offset-4"
              >
                {featured.title}
              </h2>
            </Link>

            {featured.subtitle ? (
              <p className="mt-4 font-serif text-[1.02rem] italic leading-snug text-grey-dark">
                {featured.subtitle}
              </p>
            ) : null}

            <p className="mt-4 font-crimson text-[19px] leading-[1.6] tracking-[-0.01em] text-grey-dark">
              {featured.excerpt}
            </p>

            <div className="mt-5 font-mono text-[10px] tracking-[0.16em] uppercase text-grey-text">
              By {featured.author}
            </div>
          </div>
        </section>
      ) : null}

      {lead.length > 0 ? (
        <section
          aria-labelledby="latest-culture-heading"
          className="py-8 border-b border-grey-line"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2
              id="latest-culture-heading"
              className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-ink"
            >
              Latest in Culture
            </h2>
            <div className="h-px flex-1 bg-grey-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lead.map((a) => (
              <article key={a.slug} className="group">
                <Link
                  href={`/articles/${a.slug}`}
                  aria-label={`Read culture article: ${a.title}`}
                  className="block no-underline"
                >
                  <div className="relative overflow-hidden bg-grey-line/30 aspect-4/3">
                    {a.image ? (
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-[0.18em] uppercase text-grey-text">
                        {a.city}
                      </div>
                    )}
                  </div>
                </Link>

                <div className="mt-4 flex items-center gap-2 flex-wrap font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-grey-text">
                  <span>{a.city}</span>
                  <span className="text-grey-line">|</span>
                  <span>{formatCategory(a.category)}</span>
                </div>

                <Link
                  href={`/articles/${a.slug}`}
                  className="block no-underline mt-2"
                >
                  <h3 className="font-serif text-[1.35rem] font-semibold leading-[1.12] text-ink group-hover:underline decoration-1 underline-offset-4">
                    {a.title}
                  </h3>
                </Link>

                <p className="mt-3 font-crimson text-[18px] leading-[1.55] tracking-[-0.01em] text-grey-dark line-clamp-4">
                  {a.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.15em] uppercase text-grey-text">
                  <span>{a.readTime} read</span>
                  <span>By {a.author}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {grid.length > 0 ? (
        <section aria-labelledby="culture-archive-heading" className="py-8">
          <div className="flex items-center gap-3 mb-6">
            <h2
              id="culture-archive-heading"
              className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-ink"
            >
              More Culture
            </h2>
            <div className="h-px flex-1 bg-grey-line" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {grid.map((a) => (
              <article key={a.slug} className="group">
                <Link
                  href={`/articles/${a.slug}`}
                  aria-label={`Read culture article: ${a.title}`}
                  className="flex h-full flex-col justify-between border border-black/15 bg-paper px-4 py-4 no-underline transition-transform duration-150 hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-3 flex gap-2 flex-wrap font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-800">
                      <span className="px-1.5 py-0.5 border border-black/40">
                        {a.city}
                      </span>
                      <span>{formatCategory(a.category)}</span>
                    </div>

                    <h3 className="font-serif text-[1.1rem] font-semibold leading-[1.15] text-ink group-hover:underline decoration-1 underline-offset-4">
                      {a.title}
                    </h3>

                    <p className="mt-3 font-crimson text-[17px] leading-[1.55] tracking-[-0.01em] text-grey-dark line-clamp-4">
                      {a.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-700">
                    <span>{a.readTime} read</span>
                    <span>Read story ↗</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}