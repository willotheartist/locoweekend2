import Link from "next/link";
import { getArticleHref, type ArticleMeta } from "@/lib/articles";
import {
  Byline,
  categoryName,
  SectionHeading,
  StoryCard,
  StoryImage,
} from "./Editorial";

type Props = {
  title: string;
  description: string;
  eyebrow?: string;
  articles: ArticleMeta[];
  children?: React.ReactNode;
};

export function SectionPage({
  title,
  description,
  eyebrow = "LocoWeekend",
  articles,
  children,
}: Props) {
  const [featured, ...rest] = articles;
  return (
    <div className="page-shell section-page">
      <header className="collection-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="deck">{description}</p>
      </header>
      {featured ? (
        <>
          <article className="collection-lead">
            <Link
              href={getArticleHref(featured)}
              className="collection-lead-image"
            >
              <StoryImage
                article={featured}
                priority
                sizes="(min-width: 1200px) 850px, (min-width: 768px) 60vw, 100vw"
              />
            </Link>
            <div className="collection-lead-copy">
              <p className="eyebrow">
                {categoryName(featured.category)} / {featured.city}
              </p>
              <Link href={getArticleHref(featured)}>
                <h2>{featured.title}</h2>
              </Link>
              <p className="deck">{featured.subtitle || featured.excerpt}</p>
              <Byline article={featured} />
              <Link className="read-link" href={getArticleHref(featured)}>
                Read the story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
          {children && (
            <details className="topic-directory">
              <summary>
                Explore topics in {title}
                <span aria-hidden="true">+</span>
              </summary>
              {children}
            </details>
          )}
          {rest.length > 0 && (
            <section className="collection-stories">
              <SectionHeading>More in {title}</SectionHeading>
              <div className="story-grid">
                {rest.map((article) => (
                  <StoryCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="empty-state">
          <h2>More stories are on the way.</h2>
          <Link href="/magazine" className="read-link">
            Explore the magazine ↗
          </Link>
        </div>
      )}
    </div>
  );
}
