import { getArticleSection } from "@/lib/sections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildArticleDescription,
  buildArticleKeywords,
  buildArticleTitle,
  getArticleSocialImageUrl,
  getArticleBySlug,
  getArticlePath,
  getArticleParent,
  getArticleUrl,
  getRecommendedArticles,
  getRelatedArticles,

} from "@/lib/articles";
import type { ArticleMeta } from "@/lib/articles";
import { SectionHeading, StoryCard, StoryImage } from "./Editorial";
import { ShareActions } from "./ShareActions";

/** Optional named exports an article MDX file can provide for structured data. */
export type ArticleFaqItem = { q: string; a: string };
export type ArticlePick = { name: string; anchor?: string; url?: string; type?: "Movie" | "TVSeries" | "Thing" };

function isFaq(value: unknown): value is ArticleFaqItem[] {
  return Array.isArray(value) && value.every((x) => x && typeof x.q === "string" && typeof x.a === "string");
}

function isPicks(value: unknown): value is ArticlePick[] {
  return Array.isArray(value) && value.every((x) => x && typeof x.name === "string");
}

/** JSON-LD answers must be plain text: strip the light markdown we allow in FAQ answers. */
function plainText(value: string): string {
  return value.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
}

const PATRICK_DUROY_HREF = "/authors/patrick-duroy";
const PATRICK_DUROY_URL = "https://locoweekend.com/authors/patrick-duroy";

function getAuthorHref(author: string): string | null {
  return author === "Patrick Duroy" ? PATRICK_DUROY_HREF : null;
}

function getAuthorUrl(author: string): string | null {
  return author === "Patrick Duroy" ? PATRICK_DUROY_URL : null;
}

export function buildMetadataForArticle(article: ArticleMeta): Metadata {
  const title = article.seoTitle || buildArticleTitle(article);
  const description = article.seoDescription || buildArticleDescription(article);
  const url = getArticleUrl(article.slug);
  const image = getArticleSocialImageUrl(article);
  const authorUrl = getAuthorUrl(article.author);

  return {
    title,
    description,
    keywords: buildArticleKeywords(article),
    alternates: { canonical: url },
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
      type: "article",
      url,
      title,
      description,
      siteName: "LocoWeekend",
      publishedTime: article.date,
      modifiedTime: article.updatedAt || article.date,
      authors: [authorUrl || article.author],
      section: getArticleSection(article).title,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export async function ArticlePageView({ article }: { article: ArticleMeta }) {
  const articlePath = getArticlePath(article.slug);
  let MdxContent: React.ComponentType | null = null;
  let faq: ArticleFaqItem[] = [];
  let picks: ArticlePick[] = [];

  if (articlePath) {
    try {
      const mod = await import(`@/content/articles/${articlePath}`);
      MdxContent = mod.default;
      if (isFaq(mod.faq)) faq = mod.faq;
      if (isPicks(mod.picks)) picks = mod.picks;
    } catch {
      // MDX file not found
    }
  }

  const recommendations = getRecommendedArticles(article, 4);
  const related = getRelatedArticles(article, 3);

  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const articleUrl = getArticleUrl(article.slug);
  const imageUrl = getArticleSocialImageUrl(article);
  const isHouseByline = article.author === "LocoWeekend";
  const crumbTitle = article.shortTitle || article.title;
  const authorHref = getAuthorHref(article.author);
  const authorUrl = getAuthorUrl(article.author);
  const section = getArticleSection(article);
  const parent = getArticleParent(article);
  const ancestors = parent.href === "/movies-series/netflix"
    ? [{ title: "Movies & Series", href: "/movies-series" }, parent]
    : parent.href === "/madrid/bars"
    ? [{ title: "Madrid", href: "/madrid" }, parent]
    : [parent];
  const sectionHref = section.href;
  const sectionLabel = section.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    // Google truncates headlines past ~110 characters; title + subtitle blew through that.
    headline: article.title.slice(0, 110),
    alternativeHeadline: article.subtitle,
    description: buildArticleDescription(article),
    author: {
      "@type": article.author === "LocoWeekend" ? "Organization" : "Person",
      ...(authorUrl ? { "@id": `${authorUrl}#person`, url: authorUrl } : {}),
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "LocoWeekend",
      logo: {
        "@type": "ImageObject",
        url: "https://locoweekend.com/LWICON.png",
      },
    },
    mainEntityOfPage: articleUrl,
    isPartOf: { "@type": "CollectionPage", "@id": `https://locoweekend.com${parent.href}`, name: parent.title },
    datePublished: article.date,
    dateModified: article.updatedAt || article.date,
    image: [imageUrl],
    keywords: buildArticleKeywords(article).join(", "),
    articleSection: sectionLabel,
    url: articleUrl,
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
      ...ancestors.map((ancestor, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: ancestor.title,
        item: `https://locoweekend.com${ancestor.href}`,
      })),
      {
        "@type": "ListItem",
        position: ancestors.length + 2,
        name: crumbTitle,
        item: articleUrl,
      },
    ],
  };

  const faqLd = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(item.a) },
        })),
      }
    : null;

  // Deliberately an ItemList of works, not Review/AggregateRating markup: the ratings are
  // editorial shortlist judgements and the copy says so. Don't dress them up as reviews.
  const picksLd = picks.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: article.title,
        numberOfItems: picks.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: picks.map((pick, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: pick.anchor ? `${articleUrl}#${pick.anchor}` : articleUrl,
          item: {
            "@type": pick.type || "Thing",
            name: pick.name,
            ...(pick.url ? { sameAs: pick.url } : {}),
          },
        })),
      }
    : null;
  const extraLd = [faqLd, picksLd].filter(Boolean);

  return (
    <article className="page-shell article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />
      {extraLd.map((ld, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ld).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <nav className="article-breadcrumb eyebrow" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true"> / </span>
        {ancestors.map((ancestor) => (
          <span key={ancestor.href}><Link href={ancestor.href}>{ancestor.title}</Link><span aria-hidden="true"> / </span></span>
        ))}
        <span aria-current="page">{crumbTitle}</span>
      </nav>
      <header className="article-header">
        <div className="article-meta">
          <Link href={sectionHref}>{sectionLabel}</Link>
          {article.category !== sectionLabel && <span>{article.category}</span>}
          <time dateTime={article.date}>{formattedDate}</time>
        </div>
        <h1>{article.title}</h1>
        {article.subtitle && <p className="deck">{article.subtitle}</p>}
        <div className="article-meta">
          <span>
            By{" "}
            {authorHref ? (
              <Link href={authorHref} rel="author">
                {article.author}
              </Link>
            ) : (
              article.author
            )}
          </span>
          <span>{article.readTime} read</span>
        </div>
        <ShareActions url={articleUrl} title={article.title} />
      </header>
      {article.image && (
        <div className="article-hero">
          <StoryImage
            article={article}
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
          <p className="article-image-caption">
            {article.city} / {article.category}
          </p>
        </div>
      )}
      <div className="article-layout">
        <div className="article-main">
          <p className="article-intro">{article.excerpt}</p>
          {MdxContent && (
            <div className="article-prose">
              <MdxContent />
            </div>
          )}
          <div className="article-author-note">
            {isHouseByline ? (
              <p>
                Written and checked by the LocoWeekend desk. Explore more in{" "}
                <Link href={sectionHref}>{sectionLabel}</Link>.
              </p>
            ) : (
              <p>
                {authorHref ? (
                  <Link href={authorHref} rel="author">
                    {article.author}
                  </Link>
                ) : (
                  article.author
                )}{" "}
                writes for LocoWeekend. Explore more in{" "}
                <Link href={sectionHref}>{sectionLabel}</Link>.
              </p>
            )}
          </div>
        </div>
        <aside className="article-aside" aria-label="Recommended stories">
          <SectionHeading>Read next</SectionHeading>
          {recommendations.map((rec) => (
            <StoryCard key={rec.slug} article={rec} />
          ))}
        </aside>
      </div>
      {related.length > 0 && (
        <section className="article-related" aria-labelledby="related-heading">
          <SectionHeading id="related-heading" href={sectionHref}>More in {sectionLabel}</SectionHeading>
          <div className="story-grid story-grid--three">
            {related.map((rec) => (
              <StoryCard key={rec.slug} article={rec} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export function getArticleOrNotFound(slug: string): ArticleMeta {
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return article;
}
