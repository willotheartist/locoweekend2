import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildArticleDescription,
  buildArticleTitle,
  getAbsoluteImageUrl,
  getArticleBySlug,
  getArticlePath,
  getArticleUrl,
  getRecommendedArticles,
  getRelatedArticles,
  isBusinessArticle,
} from "@/lib/articles";
import type { ArticleMeta } from "@/lib/articles";
import { SectionHeading, StoryCard, StoryImage } from "./Editorial";
import { ShareActions } from "./ShareActions";

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
  const image = getAbsoluteImageUrl(article.image);
  const authorUrl = getAuthorUrl(article.author);

  return {
    title,
    description,
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
      section: article.category,
      images: image ? [{ url: image, alt: article.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export async function ArticlePageView({ article }: { article: ArticleMeta }) {
  const articlePath = getArticlePath(article.slug);
  let MdxContent: React.ComponentType | null = null;

  if (articlePath) {
    try {
      const mod = await import(`@/content/articles/${articlePath}`);
      MdxContent = mod.default;
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
  const imageUrl = getAbsoluteImageUrl(article.image);
  const authorHref = getAuthorHref(article.author);
  const authorUrl = getAuthorUrl(article.author);
  const sectionHref = isBusinessArticle(article) ? "/business" : "/magazine";
  const sectionLabel = isBusinessArticle(article) ? "Business" : "Magazine";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: buildArticleTitle(article),
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
    datePublished: article.date,
    dateModified: article.updatedAt || article.date,
    image: imageUrl ? [imageUrl] : undefined,
    articleSection: article.category,
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
      {
        "@type": "ListItem",
        position: 2,
        name: sectionLabel,
        item: `https://locoweekend.com${sectionHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

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
            <p>
              {authorHref ? (
                <Link href={authorHref} rel="author">
                  {article.author}
                </Link>
              ) : (
                article.author
              )}{" "}
              writes for LocoWeekend. Explore more in{" "}
              <Link href={sectionHref}>{sectionLabel.toLowerCase()}</Link>.
            </p>
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
          <SectionHeading id="related-heading">Keep reading</SectionHeading>
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
