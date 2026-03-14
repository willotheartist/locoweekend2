import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, type ArticleMeta as Article } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Madrid | LocoWeekend",
  description:
    "A sharper Madrid city guide covering neighbourhoods, cocktail bars, wine bars, cafés, breakfast spots, bookshops, streets and the night energy that still makes the city feel properly alive.",
  alternates: {
    canonical: "/madrid",
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
      <span>{time}</span>
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
          sizes="(min-width: 1024px) 720px, 100vw"
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
    <div className="mt-10">
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

function CompactLink({
  href,
  title,
  eyebrow,
}: {
  href: string;
  title: string;
  eyebrow: string;
}) {
  return (
    <Link href={href} className="block no-underline group">
      <div className="border-t border-grey-line pt-4">
        <div className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-grey-text">
          {eyebrow}
        </div>
        <h3 className="mt-2 font-serif text-[1.22rem] leading-[1.12] font-semibold text-ink group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function MadridPage() {
  const all = getAllArticles();
  const madrid = all
    .filter((a) => a.city.toLowerCase() === "madrid")
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const featured =
    madrid.find((a) => a.slug === "best-neighbourhoods-in-madrid-for-a-weekend") ??
    madrid[0];

  const rest = madrid.filter((a) => a.slug !== featured?.slug);

  const nightlife = madrid.filter((a) =>
    [
      "best-cocktail-bars-in-madrid-right-now",
      "best-wine-bars-in-madrid-right-now",
      "why-madrid-still-has-better-night-energy-than-bigger-european-capitals",
    ].includes(a.slug)
  );

  const daytime = madrid.filter((a) =>
    [
      "best-cafes-in-madrid-for-reading-writing-and-hiding-out",
      "best-breakfast-spots-in-madrid-right-now",
      "best-bookshops-in-madrid",
      "the-coolest-streets-in-madrid",
    ].includes(a.slug)
  );

  const planning = madrid.filter((a) =>
    [
      "best-neighbourhoods-in-madrid-for-a-weekend",
      "the-coolest-streets-in-madrid",
    ].includes(a.slug)
  );

  return (
    <div className="w-full bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="pt-8 lg:pt-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text">
              City Focus
            </span>
            <span className="text-grey-line text-[10px]">|</span>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey-text">
              Madrid
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[2.9rem] sm:text-[4.4rem] lg:text-[5.2rem] font-semibold leading-[0.94] tracking-[-0.04em] text-ink max-w-[12ch]">
            Madrid, done properly.
          </h1>

          <p className="mt-5 max-w-[62ch] font-serif text-[1.08rem] italic text-grey-dark leading-snug">
            Neighbourhood logic, smarter mornings, wine-led evenings, streets
            that actually carry the day, and the kind of nightlife energy richer
            capitals increasingly imitate rather than naturally produce.
          </p>

          <p className="mt-4 max-w-[66ch] font-serif text-[1.02rem] leading-[1.72] text-grey-dark">
            Madrid is not a checklist city. It works when you choose the right
            district, make one or two strong decisions, and leave enough room
            for appetite, walking and drift. This page gathers the Madrid reads
            that matter, then groups them in the way the city itself actually
            works.
          </p>
        </div>

        {featured ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
            <div className="lg:col-span-7">
              <Link
                href={`/articles/${featured.slug}`}
                aria-label={`Read featured Madrid article: ${featured.title}`}
                className="block no-underline group"
              >
                <ImageBox
                  city={featured.city}
                  src={featured.image}
                  alt={featured.title}
                  aspect="16/9"
                />

                <div className="mt-5">
                  <CategoryLabel category={featured.category} />
                  <h2 className="mt-3 font-serif text-[2rem] sm:text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink group-hover:underline decoration-[1.5px] underline-offset-[6px]">
                    {featured.title}
                  </h2>

                  {featured.subtitle ? (
                    <p className="mt-3 font-serif text-[1rem] italic text-grey-dark leading-snug max-w-[58ch]">
                      {featured.subtitle}
                    </p>
                  ) : null}

                  <p className="mt-4 font-serif text-[1.03rem] leading-[1.72] text-grey-dark max-w-[64ch]">
                    {featured.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <Meta time={featured.readTime} />
                    <Byline author={featured.author} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-5 lg:pl-4">
              <div className="border-t border-ink pt-4">
                <h2 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
                  Start Here
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                <CompactLink
                  href="/articles/best-neighbourhoods-in-madrid-for-a-weekend"
                  eyebrow="Base"
                  title="Choose the right neighbourhood first"
                />
                <CompactLink
                  href="/articles/the-coolest-streets-in-madrid"
                  eyebrow="Walk"
                  title="Use streets to organise the day"
                />
                <CompactLink
                  href="/articles/best-breakfast-spots-in-madrid-right-now"
                  eyebrow="Morning"
                  title="Start the day with better timing"
                />
                <CompactLink
                  href="/articles/best-cocktail-bars-in-madrid-right-now"
                  eyebrow="Night"
                  title="Make one strong drinks decision"
                />
              </div>

              <div className="mt-8 border border-grey-line p-5">
                <div className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-grey-text">
                  How to use the city
                </div>
                <p className="mt-3 font-serif text-[1rem] leading-[1.7] text-grey-dark">
                  Do less, choose better, and let the districts connect the day
                  for you. Madrid usually improves when you stop trying to win
                  it as a list.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {planning.length > 0 && (
          <>
            <SectionHeader label="Plan The Weekend" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-9 pt-6">
              {planning.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {daytime.length > 0 && (
          <>
            <SectionHeader label="Daytime Madrid" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-9 pt-6">
              {daytime.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {nightlife.length > 0 && (
          <>
            <SectionHeader label="After Dark" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {nightlife.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            <SectionHeader label="All Madrid Reads" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-9 pt-6">
              {rest.map((a) => (
                <RowCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        <div className="border-t border-ink mt-10" />
      </div>
    </div>
  );
}
