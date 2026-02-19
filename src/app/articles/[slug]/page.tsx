// src/app/articles/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getArticlePath,
} from "@/lib/articles";
import type { ArticleMeta } from "@/lib/articles";

/* ───────────────────────────────────────────
   SHARE ICONS
   ─────────────────────────────────────────── */

function ShareIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={`Share on ${label}`}
      className="w-9 h-9 flex items-center justify-center text-ink hover:text-grey-text transition-colors duration-200"
    >
      {children}
    </button>
  );
}

function ShareBar() {
  return (
    <div className="flex items-center justify-center gap-1 mt-6">
      <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-grey-text mr-2">
        Share
      </span>
      <ShareIcon label="X">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </ShareIcon>
      <ShareIcon label="WhatsApp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </ShareIcon>
      <ShareIcon label="Email">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </ShareIcon>
      <ShareIcon label="Copy link">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </ShareIcon>
    </div>
  );
}

/* ───────────────────────────────────────────
   RECOMMENDATION + RELATED CARDS
   ─────────────────────────────────────────── */

function RecommendationCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block no-underline py-4 border-b border-grey-line last:border-b-0"
    >
      {article.image ? (
        <div className="relative w-full aspect-4/3 mb-3 overflow-hidden bg-grey-line/50">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      ) : null}

      <h4 className="font-serif text-[15px] font-bold leading-snug text-ink group-hover:underline decoration-1 underline-offset-2">
        {article.title}
      </h4>
      <div className="flex items-center gap-2 mt-1.5">
        <span className="font-mono text-[9px] font-bold tracking-wider uppercase text-grey-text">
          {article.category}
        </span>
        <span className="text-grey-line text-[9px]">|</span>
        <span className="font-mono text-[9px] tracking-widest uppercase text-grey-text">
          {article.readTime} read
        </span>
      </div>
    </Link>
  );
}

function RelatedCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block no-underline">
      {article.image ? (
        <div className="relative aspect-4/3 bg-grey-line/50 mb-3 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      ) : (
        <div className="aspect-4/3 bg-grey-line/50 mb-3 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-grey-text tracking-widest uppercase">
            {article.city}
          </div>
        </div>
      )}

      <span className="font-mono text-[9px] font-bold tracking-[0.14em] uppercase text-grey-text">
        {article.category}
      </span>
      <h4 className="font-serif text-lg font-bold leading-snug text-ink mt-1 group-hover:underline decoration-1 underline-offset-2">
        {article.title}
      </h4>
      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-widest uppercase text-grey-text">
          {article.readTime} read
        </span>
      </div>
    </Link>
  );
}

/* ───────────────────────────────────────────
   STATIC PARAMS
   ─────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

/* ───────────────────────────────────────────
   ARTICLE PAGE
   ─────────────────────────────────────────── */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articlePath = getArticlePath(slug);
  let MdxContent: React.ComponentType | null = null;

  if (articlePath) {
    try {
      const mod = await import(`@/content/articles/${articlePath}`);
      MdxContent = mod.default;
    } catch {
      // MDX file not found
    }
  }

  const recommendations = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 4);
  const related = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(4, 7);

  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article>
      {/* ═══ HEADER ═══ */}
      <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-8 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
            {article.category}
          </span>
          <span className="text-grey-line text-xs">|</span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-grey-text">
            {formattedDate}
          </span>
          <span className="text-grey-line text-xs">|</span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-grey-text">
            {article.readTime} read
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-medium leading-none -tracking-[0.01em] text-ink mt-6 mx-auto">
          {article.subtitle
            ? `${article.title}: ${article.subtitle}`
            : article.title}
        </h1>

        <p className="mt-6">
          <span className="font-mono text-[11px] tracking-widest uppercase text-grey-text">
            Writer{" "}
          </span>
          <span className="font-serif text-base text-ink">{article.author}</span>
        </p>

        <ShareBar />
      </header>

      {/* ═══ FEATURED IMAGE (ABOVE EXCERPT) ═══ */}
      {article.image && (
        <div className="max-w-6xl mx-auto px-5 sm:px-8 -mt-2">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-grey-line/50">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-2 mb-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-grey-text">
              {article.city}
            </span>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <hr className="border-t border-dashed border-grey-line" />
      </div>

      {/* ═══ BODY + SIDEBAR ═══ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        <div className="max-w-[660px]">
          <p className="font-[family-name:var(--font-crimson)] text-[19px] leading-[1.48] tracking-[-0.01em] text-ink mb-7">
            {article.excerpt}
          </p>

          {MdxContent ? (
            <div>
              <MdxContent />
            </div>
          ) : (
            <p className="font-mono text-sm text-grey-text italic">
              Article content coming soon.
            </p>
          )}

          <div className="mt-10 pt-6 border-t border-dashed border-grey-line">
            <p className="font-[family-name:var(--font-crimson)] text-[16px] italic text-grey-dark leading-[1.45] tracking-[-0.005em]">
              {article.author} writes for LocoWeekend. For more,{" "}
              <Link
                href="/subscribe"
                className="text-ink underline underline-offset-2 decoration-1"
              >
                subscribe
              </Link>
              .
            </p>
          </div>

          {recommendations[0] && (
            <div className="mt-6 pt-4 border-t border-grey-line">
              <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-grey-text">
                Read next:{" "}
              </span>
              <Link
                href={`/articles/${recommendations[0].slug}`}
                className="font-[family-name:var(--font-crimson)] text-[17px] tracking-[-0.01em] text-ink underline underline-offset-2 decoration-1 hover:text-grey-dark transition-colors"
              >
                {recommendations[0].title}
              </Link>
            </div>
          )}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <div className="border-t-2 border-ink pt-4 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-ink">
                Recommendations
              </span>
            </div>
            {recommendations.map((rec) => (
              <RecommendationCard key={rec.slug} article={rec} />
            ))}
          </div>
        </aside>
      </div>

      {/* ═══ RELATED ═══ */}
      {related.length > 0 && (
        <div className="border-t-2 border-ink">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
            <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-ink mb-8">
              Related
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rel) => (
                <RelatedCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
