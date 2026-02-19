// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { articleIndex } from "@/content/articles";
import type { Article } from "@/content/articles";

/* ───────────────────────────────────────────
   ATOMS
   ─────────────────────────────────────────── */

function CategoryLabel({ category }: { category: string }) {
  return (
    <span className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-ink">
      {category}
    </span>
  );
}

function Meta({ time }: { time: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-grey-text">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-35"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
      <span>{time} read</span>
    </div>
  );
}

function Byline({ author }: { author: string }) {
  return (
    <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-grey-text">
      By {author}
    </div>
  );
}

function ImageBox({
  city,
  src,
  alt,
  aspect = "4/3",
  className = "",
}: {
  city: string;
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-grey-line/30 ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? city}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-grey-text/55 tracking-[0.22em] uppercase select-none">
          {city}
        </div>
      )}
    </div>
  );
}

function RuleLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-0">
      <div className="bg-ink text-paper font-mono text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 shrink-0">
        {label}
      </div>
      <div className="flex-1 h-px bg-grey-line" />
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mt-9">
      <RuleLabel label={label} />
    </div>
  );
}

function RowCard({ article }: { article: Article }) {
  return (
    <article className="group">
      <Link href={`/articles/${article.slug}`} className="block no-underline mb-3">
        <ImageBox
          city={article.city}
          src={article.image}
          alt={article.title}
          aspect="3/2"
        />
      </Link>

      <CategoryLabel category={article.category} />

      <Link href={`/articles/${article.slug}`} className="no-underline block mt-2">
        <h3 className="font-serif text-[1.28rem] font-semibold leading-[1.14] text-ink group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h3>
      </Link>

      {article.subtitle ? (
        <p className="font-serif text-[0.95rem] italic text-grey-dark mt-2 leading-snug line-clamp-2">
          {article.subtitle}
        </p>
      ) : null}

      <p className="font-serif text-[0.98rem] leading-[1.65] text-grey-dark mt-2 line-clamp-3">
        {article.excerpt}
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <Meta time={article.readTime} />
        <Byline author={article.author} />
      </div>
    </article>
  );
}

function CompactStory({ article }: { article: Article }) {
  return (
    <article className="group">
      <CategoryLabel category={article.category} />

      <Link href={`/articles/${article.slug}`} className="no-underline block mt-2">
        <h3 className="font-serif text-[1.32rem] font-semibold leading-[1.12] text-ink group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h3>
      </Link>

      {article.subtitle ? (
        <p className="font-serif text-[0.95rem] italic text-grey-dark mt-2 leading-snug line-clamp-2">
          {article.subtitle}
        </p>
      ) : null}

      <p className="font-serif text-[0.98rem] leading-[1.65] text-grey-dark mt-2 line-clamp-3">
        {article.excerpt}
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <Meta time={article.readTime} />
        <Byline author={article.author} />
      </div>
    </article>
  );
}

function HeadlineRow({ article }: { article: Article }) {
  return (
    <div className="group">
      <div className="flex items-start gap-3">
        <div className="mt-[6px] w-1.5 h-1.5 rounded-full bg-grey-line" />
        <div className="min-w-0">
          <CategoryLabel category={article.category} />
          <Link href={`/articles/${article.slug}`} className="no-underline block mt-1">
            <h4 className="font-serif text-[1.05rem] leading-[1.25] text-ink group-hover:underline decoration-1 underline-offset-4">
              {article.title}
            </h4>
          </Link>
          <div className="mt-2">
            <Meta time={article.readTime} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   HELPERS
   ─────────────────────────────────────────── */

function pickByCategory(all: Article[], category: string, count: number) {
  return all.filter((a) => a.category === category).slice(0, count);
}

/* ───────────────────────────────────────────
   HOMEPAGE
   ─────────────────────────────────────────── */

export default function HomePage() {
  const featured = articleIndex.find((a) => a.featured) ?? articleIndex[0];
  const rest = articleIndex.filter((a) => a.slug !== featured.slug);

  // SECTION A — make the page feel “edited”, not empty:
  // - Lead on left
  // - Two stacked columns with 3 items each
  const middleCol = rest.slice(0, 3);
  const rightCol = rest.slice(3, 6);

  // SECTION B — more density: 6 “latest” in a proper grid
  const latestGrid = rest.slice(6, 12);

  // ROWS
  const flicks = pickByCategory(rest, "Flicks", 3);
  const grub = pickByCategory(rest, "Grub", 3);
  const drinks = pickByCategory(rest, "Drinks", 3);
  const politics = pickByCategory(rest, "Politics", 3);

  // Archive
  const usedSlugs = new Set([
    featured.slug,
    ...middleCol.map((a) => a.slug),
    ...rightCol.map((a) => a.slug),
    ...latestGrid.map((a) => a.slug),
    ...flicks.map((a) => a.slug),
    ...grub.map((a) => a.slug),
    ...drinks.map((a) => a.slug),
    ...politics.map((a) => a.slug),
  ]);

  const archive = rest.filter((a) => !usedSlugs.has(a.slug));

  return (
    <div className="w-full bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* TOP RULE */}
        <div className="border-t border-ink mt-2" />

        {/* SECTION A */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Lead */}
          <div className="lg:col-span-6 py-6 lg:py-7 lg:pr-10 lg:border-r border-grey-line">
            <CategoryLabel category={featured.category} />

            <Link
              href={`/articles/${featured.slug}`}
              className="no-underline block mt-3 group"
            >
              <h1 className="font-serif text-[2.25rem] sm:text-[2.85rem] lg:text-[3.15rem] font-semibold leading-[1.03] text-ink group-hover:underline decoration-[1.5px] underline-offset-[6px]">
                {featured.title}
              </h1>
            </Link>

            {featured.subtitle && (
              <p className="font-serif text-[1.08rem] italic text-grey-dark mt-3 leading-snug max-w-[62ch]">
                {featured.subtitle}
              </p>
            )}

            <p className="font-serif text-[1.05rem] leading-[1.75] text-grey-dark mt-4 max-w-[64ch]">
              {featured.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between gap-4">
              <Meta time={featured.readTime} />
              <Byline author={featured.author} />
            </div>

            {/* Lead image: reduce empty feeling by tightening margin + using a slightly squatter ratio */}
            <Link href={`/articles/${featured.slug}`} className="block mt-5 no-underline">
              <ImageBox
                city={featured.city}
                src={featured.image}
                alt={featured.title}
                aspect="16/9"
              />
            </Link>

            {/* Under-lead headlines (Monocle-style density) */}
            <div className="mt-6 pt-6 border-t border-grey-line">
              <div className="flex items-center justify-between gap-6">
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
                  Also on the front page
                </span>
                <div className="flex-1 h-px bg-grey-line" />
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {latestGrid.slice(0, 4).map((a) => (
                  <HeadlineRow key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="lg:col-span-3 py-6 lg:py-7 lg:px-8 lg:border-r border-grey-line">
            {middleCol.map((article, i) => (
              <div
                key={article.slug}
                className={i > 0 ? "mt-6 pt-6 border-t border-grey-line" : ""}
              >
                <Link href={`/articles/${article.slug}`} className="block no-underline mb-3">
                  <ImageBox
                    city={article.city}
                    src={article.image}
                    alt={article.title}
                    aspect="3/2"
                  />
                </Link>
                <CompactStory article={article} />
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="lg:col-span-3 py-6 lg:py-7 lg:pl-8">
            {rightCol.map((article, i) => (
              <div
                key={article.slug}
                className={i > 0 ? "mt-6 pt-6 border-t border-grey-line" : ""}
              >
                <Link href={`/articles/${article.slug}`} className="block no-underline mb-3">
                  <ImageBox
                    city={article.city}
                    src={article.image}
                    alt={article.title}
                    aspect="3/2"
                  />
                </Link>
                <CompactStory article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B — LATEST GRID (denser, Monocle-ish) */}
        <div className="mt-1 border-t border-ink" />
        <div className="mt-0">
          <div className="relative">
            <div className="absolute left-0 top-0 -translate-y-full bg-yellow text-ink font-mono text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 leading-none">
              Latest
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left: text-heavy list */}
            <div className="md:col-span-4 lg:col-span-3 py-6 md:pr-8 md:border-r border-grey-line">
              <div className="space-y-6">
                {latestGrid.slice(0, 3).map((a) => (
                  <div key={a.slug} className="pb-6 border-b border-grey-line last:border-b-0 last:pb-0">
                    <CategoryLabel category={a.category} />
                    <Link href={`/articles/${a.slug}`} className="no-underline block mt-2 group">
                      <h3 className="font-serif text-[1.28rem] font-semibold leading-[1.15] text-ink group-hover:underline decoration-1 underline-offset-4">
                        {a.title}
                      </h3>
                    </Link>
                    <p className="font-serif text-[0.98rem] leading-[1.65] text-grey-dark mt-2 line-clamp-3">
                      {a.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <Meta time={a.readTime} />
                      <Byline author={a.author} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3-up cards with tighter padding + more copy */}
            <div className="md:col-span-8 lg:col-span-9 py-6 md:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8">
                {latestGrid.slice(3, 9).map((article) => (
                  <RowCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROWS */}
        {flicks.length > 0 && (
          <>
            <SectionHeader label="Flicks" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {flicks.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {grub.length > 0 && (
          <>
            <SectionHeader label="Grub" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {grub.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {drinks.length > 0 && (
          <>
            <SectionHeader label="Drinks" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {drinks.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {politics.length > 0 && (
          <>
            <SectionHeader label="Politics" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {politics.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {/* SECTION C */}
        <div className="border-t border-ink mt-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 py-8 lg:pr-10 lg:border-r border-grey-line">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-yellow" />
              <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
                Editor&apos;s Note
              </span>
            </div>

            <div className="bg-ink text-paper p-7">
              <p className="font-serif text-[0.98rem] leading-[1.75] italic">
                &ldquo;We started this thing because every city guide felt like it was
                written by someone who&apos;d been there for a weekend. We live here.
                We eat here. We get ripped off here.&rdquo;
              </p>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/45 mt-5">
                — Wills Mayani, Editor
              </p>
            </div>

            <Link
              href="/subscribe"
              className="block bg-yellow text-ink font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-center py-3.5 px-5 mt-8 no-underline hover:brightness-95 transition-all"
            >
              Subscribe to the Weekend
            </Link>
          </div>

          {/* Archive */}
          <div className="lg:col-span-8 xl:col-span-9 py-8 lg:pl-10">
            <RuleLabel label="From the Archive" />

            {archive.length > 0 && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8">
                {archive.map((article) => (
                  <article key={article.slug} className="group">
                    <CategoryLabel category={article.category} />
                    <Link href={`/articles/${article.slug}`} className="no-underline block mt-2">
                      <h3 className="font-serif text-[1.22rem] font-semibold leading-[1.18] text-ink group-hover:underline decoration-1 underline-offset-4">
                        {article.title}
                      </h3>
                    </Link>
                    {article.subtitle && (
                      <p className="font-serif text-[0.95rem] italic text-grey-dark mt-2 leading-snug line-clamp-2">
                        {article.subtitle}
                      </p>
                    )}
                    <p className="font-serif text-[0.98rem] leading-[1.65] text-grey-dark mt-2 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <Meta time={article.readTime} />
                      <Byline author={article.author} />
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-ink mt-10" />
      </div>
    </div>
  );
}
