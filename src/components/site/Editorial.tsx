import Image from "next/image";
import Link from "next/link";
import { getArticleHref, type ArticleMeta } from "@/lib/articles";

export function categoryName(category: string) {
  return category.toLowerCase() === "flicks" ? "Film" : category;
}

export function StoryImage({
  article,
  priority = false,
  sizes = "(min-width: 1200px) 360px, (min-width: 640px) 50vw, 100vw",
}: {
  article: ArticleMeta;
  priority?: boolean;
  sizes?: string;
}) {
  if (!article.image) return null;
  return (
    <div className="story-image">
      <Image
        src={article.image}
        alt={article.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function Byline({ article }: { article: ArticleMeta }) {
  return <p className="byline">By {article.author}</p>;
}

export function SectionHeading({
  children,
  href,
  id,
}: {
  children: React.ReactNode;
  href?: string;
  id?: string;
}) {
  return (
    <div className="section-rule">
      <h2 id={id}>{children}</h2>
      {href && (
        <Link href={href} className="section-more">
          View all <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}

export function StoryCard({
  article,
  variant = "standard",
  priority = false,
}: {
  article: ArticleMeta;
  variant?: "standard" | "compact" | "text";
  priority?: boolean;
}) {
  return (
    <article className={`story-card story-card--${variant}`}>
      <Link href={getArticleHref(article)} className="story-link">
        {variant !== "text" && (
          <StoryImage
            article={article}
            priority={priority}
            sizes={
              variant === "compact"
                ? "(min-width: 1200px) 140px, 120px"
                : undefined
            }
          />
        )}
        <div className="story-copy">
          <p className="eyebrow">{categoryName(article.category)}</p>
          <h3>{article.title}</h3>
          <Byline article={article} />
        </div>
      </Link>
    </article>
  );
}
