import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticleHref } from "@/lib/articles";

const AUTHOR_NAME = "Patrick Duroy";
const AUTHOR_URL = "https://locoweekend.com/authors/patrick-duroy";
const AUTHOR_DESCRIPTION =
  "Patrick Duroy writes about technology, software, digital products, startups, business and contemporary culture for LocoWeekend.";

export const metadata: Metadata = {
  title: "Patrick Duroy | Writer at LocoWeekend",
  description: AUTHOR_DESCRIPTION,
  alternates: { canonical: AUTHOR_URL },
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
    type: "profile",
    url: AUTHOR_URL,
    title: "Patrick Duroy | LocoWeekend",
    description: AUTHOR_DESCRIPTION,
    siteName: "LocoWeekend",
    images: [
      {
        url: "https://locoweekend.com/LWICON.png",
        width: 1200,
        height: 630,
        alt: "Patrick Duroy at LocoWeekend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Duroy | LocoWeekend",
    description: AUTHOR_DESCRIPTION,
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function PatrickDuroyPage() {
  const articles = getAllArticles().filter(
    (article) => article.author === AUTHOR_NAME
  );

  const personLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: AUTHOR_URL,
    name: "Patrick Duroy | LocoWeekend",
    mainEntity: {
      "@type": "Person",
      "@id": `${AUTHOR_URL}#person`,
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
      jobTitle: "Writer",
      worksFor: {
        "@type": "Organization",
        name: "LocoWeekend",
        url: "https://locoweekend.com/",
      },
      knowsAbout: [
        "Technology",
        "Software",
        "Digital products",
        "Startups",
        "Business",
      ],
      description: AUTHOR_DESCRIPTION,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "LocoWeekend",
        item: "https://locoweekend.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: AUTHOR_NAME,
        item: AUTHOR_URL,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <header className="border-b border-grey-line pb-10">
        <div className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-grey-text">
          LocoWeekend / Writer
        </div>

        <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink">
          Patrick Duroy
        </h1>

        <p className="mt-6 max-w-3xl font-crimson text-[21px] sm:text-[23px] leading-[1.5] tracking-[-0.01em] text-grey-dark">
          Patrick Duroy writes about technology, software, digital products,
          startups and business for LocoWeekend, with a focus on how products
          are built, bought, funded and improved.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-grey-text">
          <span>
            {articles.length} published {articles.length === 1 ? "article" : "articles"}
          </span>
          <span className="text-grey-line">|</span>
          <Link href="/business" className="text-ink underline underline-offset-4">
            Business
          </Link>
        </div>
      </header>

      <section className="py-10" aria-labelledby="patrick-duroy-articles">
        <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3">
          <h2
            id="patrick-duroy-articles"
            className="font-mono text-[12px] font-bold tracking-[0.16em] uppercase text-ink"
          >
            Articles by Patrick Duroy
          </h2>
        </div>

        <div className="divide-y divide-grey-line">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 md:gap-8 py-7"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-grey-text">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>

              <div>
                <div className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-grey-text">
                  {article.category} · {article.city}
                </div>
                <Link
                  href={getArticleHref(article)}
                  className="group no-underline"
                >
                  <h3 className="font-serif text-2xl sm:text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.015em] text-ink group-hover:underline decoration-1 underline-offset-4">
                    {article.title}
                  </h3>
                </Link>
                <p className="mt-3 max-w-3xl font-crimson text-[18px] leading-[1.5] text-grey-dark">
                  {article.excerpt}
                </p>
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-grey-text md:text-right">
                {article.readTime} read
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
