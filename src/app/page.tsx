// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articleIndex } from "@/content/articles";
import type { Article } from "@/content/articles";

export const metadata: Metadata = {
  title: "LocoWeekend · Culture, Affairs, & anything interesting",
  description:
    "Independent street magazine covering culture, affairs, film, food, cities, and anything interesting.",
  alternates: {
    canonical: "/",
  },
};

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
      <Link
        href={`/articles/${article.slug}`}
        aria-label={`Read article: ${article.title}`}
        className="block no-underline mb-3"
      >
        <ImageBox
          city={article.city}
          src={article.image}
          alt={article.title}
          aspect="3/2"
        />
      </Link>

      <CategoryLabel category={article.category} />

      <Link
        href={`/articles/${article.slug}`}
        aria-label={`Read article: ${article.title}`}
        className="no-underline block mt-2"
      >
        <h2 className="font-serif text-[1.28rem] font-semibold leading-[1.14] text-ink group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h2>
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

      <Link
        href={`/articles/${article.slug}`}
        aria-label={`Read article: ${article.title}`}
        className="no-underline block mt-2"
      >
        <h2 className="font-serif text-[1.32rem] font-semibold leading-[1.12] text-ink group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </h2>
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

function BriefingCard({
  kicker,
  article,
}: {
  kicker: string;
  article: Article;
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      aria-label={`${kicker}: ${article.title}`}
      className="block no-underline group h-full"
    >
      <div className="h-full p-5">
        <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text">
          {kicker}
        </div>

        <div className="mt-3">
          <ImageBox
            city={article.city}
            src={article.image}
            alt={article.title}
            aspect="4/3"
            className="transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        <div className="mt-4 font-serif text-[1.15rem] leading-[1.18] font-semibold text-ink group-hover:underline decoration-1 underline-offset-4">
          {article.title}
        </div>

        {article.subtitle ? (
          <div className="mt-2 font-serif text-[0.92rem] italic text-grey-dark leading-snug line-clamp-2">
            {article.subtitle}
          </div>
        ) : null}

        <div className="mt-3 flex items-center justify-between gap-3">
          <Meta time={article.readTime} />
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-text">
            → Open
          </span>
        </div>
      </div>
    </Link>
  );
}

function WeekendBriefingGateway({ items }: { items: { kicker: string; article: Article }[] }) {
  return (
    <section className="border border-grey-line" aria-labelledby="weekend-briefing-heading">
      <div className="flex items-center justify-between px-5 py-4 border-b border-grey-line">
        <div className="flex items-center gap-3">
          <div className="w-9 h-0.5 bg-yellow" />
          <h2
            id="weekend-briefing-heading"
            className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink"
          >
            Weekend Briefing
          </h2>
        </div>
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-text">
          Four doors
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-grey-line">
        {items.map((it, idx) => (
          <div key={`${it.kicker}-${it.article.slug}-${idx}`} className="h-full">
            <BriefingCard kicker={it.kicker} article={it.article} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CityGatewayCard({
  city,
  href,
  blurb,
  image,
}: {
  city: string;
  href: string;
  blurb: string;
  image?: string;
}) {
  return (
    <Link href={href} className="block no-underline group">
      <div className="border-t border-grey-line pt-5">
        <div className="relative">
          <ImageBox
            city={city}
            src={image}
            alt={city}
            aspect="4/5"
            className="transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-black/0 to-black/0" />
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-[1.6rem] leading-[1.05] font-semibold text-ink">
            {city}
          </h3>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-text">
            Explore
          </span>
        </div>

        <p className="font-serif text-[0.98rem] leading-[1.65] text-grey-dark mt-2 max-w-[44ch]">
          {blurb}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
          <span className="group-hover:underline decoration-1 underline-offset-4">
            Enter the city
          </span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}

function pickByCategory(all: Article[], category: string, count: number) {
  return all.filter((a) => a.category === category).slice(0, count);
}

function pickFirstImageForCity(all: Article[], city: string) {
  return all.find((a) => a.city === city && a.image)?.image;
}

function pickFirstByCategory(all: Article[], category: string) {
  return all.find((a) => a.category === category);
}

export default function HomePage() {
  const featured = articleIndex.find((a) => a.featured) ?? articleIndex[0];
  const rest = articleIndex.filter((a) => a.slug !== featured.slug);

  const middleCol = rest.slice(0, 3);
  const rightCol = rest.slice(3, 6);
  const latestGrid = rest.slice(6, 12);

  const flicks = pickByCategory(rest, "Flicks", 3);
  const grub = pickByCategory(rest, "Grub", 3);
  const drinks = pickByCategory(rest, "Drinks", 3);
  const politics = pickByCategory(rest, "Politics", 3);

  const londonImg = pickFirstImageForCity(articleIndex, "London");
  const beirutImg = pickFirstImageForCity(articleIndex, "Beirut");
  const madridImg = pickFirstImageForCity(articleIndex, "Madrid");
  const globalImg = pickFirstImageForCity(articleIndex, "Global");

  const bRead = pickFirstByCategory(rest, "Politics") ?? latestGrid[0] ?? rest[0];
  const bWatch = pickFirstByCategory(rest, "Flicks") ?? latestGrid[1] ?? rest[1] ?? rest[0];
  const bEat = pickFirstByCategory(rest, "Grub") ?? latestGrid[2] ?? rest[2] ?? rest[0];
  const bUnderstand = latestGrid[3] ?? rest[3] ?? rest[0];

  const briefingItems = [
    { kicker: "Read", article: bRead },
    { kicker: "Watch", article: bWatch },
    { kicker: "Eat", article: bEat },
    { kicker: "Understand", article: bUnderstand },
  ];

  return (
    <div className="w-full bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 py-6 lg:py-7 lg:pr-10 lg:border-r border-grey-line">
            <div className="lg:sticky lg:top-24">
              <CategoryLabel category={featured.category} />

              <Link
                href={`/articles/${featured.slug}`}
                aria-label={`Read featured article: ${featured.title}`}
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

              <Link
                href={`/articles/${featured.slug}`}
                aria-label={`Open featured article: ${featured.title}`}
                className="block mt-5 no-underline"
              >
                <ImageBox
                  city={featured.city}
                  src={featured.image}
                  alt={featured.title}
                  aspect="16/9"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 py-6 lg:py-7 lg:px-8 lg:border-r border-grey-line">
            {middleCol.map((article, i) => (
              <div
                key={article.slug}
                className={i > 0 ? "mt-6 pt-6 border-t border-grey-line" : ""}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  aria-label={`Open article: ${article.title}`}
                  className="block no-underline mb-3"
                >
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

          <div className="lg:col-span-3 py-6 lg:py-7 lg:pl-8">
            {rightCol.map((article, i) => (
              <div
                key={article.slug}
                className={i > 0 ? "mt-6 pt-6 border-t border-grey-line" : ""}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  aria-label={`Open article: ${article.title}`}
                  className="block no-underline mb-3"
                >
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

        <div className="mt-1 border-t border-ink" />
        <div className="mt-0">
          <div className="relative">
            <div className="absolute left-0 top-0 -translate-y-full bg-yellow text-ink font-mono text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 leading-none">
              Latest
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 lg:col-span-3 py-6 md:pr-8 md:border-r border-grey-line">
              <div className="space-y-6">
                {latestGrid.slice(0, 3).map((a) => (
                  <div
                    key={a.slug}
                    className="pb-6 border-b border-grey-line last:border-b-0 last:pb-0"
                  >
                    <CategoryLabel category={a.category} />
                    <Link
                      href={`/articles/${a.slug}`}
                      aria-label={`Read article: ${a.title}`}
                      className="no-underline block mt-2 group"
                    >
                      <h2 className="font-serif text-[1.28rem] font-semibold leading-[1.15] text-ink group-hover:underline decoration-1 underline-offset-4">
                        {a.title}
                      </h2>
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

            <div className="md:col-span-8 lg:col-span-9 py-6 md:pl-8">
              <WeekendBriefingGateway items={briefingItems} />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8">
                {latestGrid.slice(3, 9).map((article) => (
                  <RowCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>

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

        <div className="border-t border-ink mt-10" />

        <div className="mt-8">
          <RuleLabel label="City Focus" />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            <CityGatewayCard
              city="London"
              href="/city/london"
              blurb="Zone 2 culture, over-designed cafés, real opinions."
              image={londonImg}
            />
            <CityGatewayCard
              city="Beirut"
              href="/city/beirut"
              blurb="Currency collapse, dark humour, daily life continuing anyway."
              image={beirutImg}
            />
            <CityGatewayCard
              city="Madrid"
              href="/city/madrid"
              blurb="Late nights, sharper politics, a city that never explains itself."
              image={madridImg}
            />
            <CityGatewayCard
              city="Global"
              href="/city/global"
              blurb="Systems, money, media, power, mood — the connective tissue."
              image={globalImg}
            />
          </div>
        </div>

        <div className="border-t border-ink mt-10" />
      </div>
    </div>
  );
}