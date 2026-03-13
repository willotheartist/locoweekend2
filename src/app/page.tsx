import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";
import { lisbonArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "LocoWeekend · Culture, Affairs, & anything interesting",
  description:
    "Independent street magazine covering culture, affairs, film, food, cities, and anything interesting.",
  alternates: { canonical: "/" },
};

function ImageBox({
  city,
  src,
  alt,
  aspect = "4/3",
}: {
  city: string;
  src?: string;
  alt?: string;
  aspect?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-grey-line/30" style={{ aspectRatio: aspect }}>
      {src ? (
        <Image
          src={src}
          alt={alt ?? city}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-grey-text/55 tracking-[0.22em] uppercase select-none">
          {city}
        </div>
      )}
    </div>
  );
}

function StoryCard({
  title,
  excerpt,
  href,
  city,
  category,
  image,
  readTime,
}: {
  title: string;
  excerpt: string;
  href: string;
  city: string;
  category: string;
  image?: string;
  readTime: string;
}) {
  return (
    <article className="group">
      <Link href={href} className="block no-underline mb-3">
        <ImageBox city={city} src={image} alt={title} aspect="3/2" />
      </Link>

      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey-text">
        {city} <span className="text-grey-line">|</span> {category}
      </div>

      <Link href={href} className="block no-underline mt-2">
        <h2 className="font-serif text-[1.25rem] font-semibold leading-[1.12] text-ink group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h2>
      </Link>

      <p className="mt-3 font-crimson text-[18px] leading-[1.55] tracking-[-0.01em] text-grey-dark line-clamp-4">
        {excerpt}
      </p>

      <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-grey-text">
        {readTime}
      </div>
    </article>
  );
}

export default function HomePage() {
  const all = getAllArticles();
  const featured = all[0];
  const latest = all.slice(1, 7);
  const lisbon = lisbonArticles().slice(0, 4);
  const global = all.filter((a) => a.city.toLowerCase() !== "lisbon").slice(0, 4);

  return (
    <div className="w-full bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-8">
        {featured ? (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-grey-line pb-10">
            <div className="lg:col-span-7">
              <Link href={`/articles/${featured.slug}`} className="block no-underline">
                <ImageBox city={featured.city} src={featured.image} alt={featured.title} aspect="16/9" />
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey-text">
                {featured.city} <span className="text-grey-line">|</span> {featured.category} <span className="text-grey-line">|</span> {featured.readTime}
              </div>

              <Link href={`/articles/${featured.slug}`} className="block no-underline mt-4">
                <h1 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold leading-[1.03] tracking-[-0.02em] text-ink hover:underline decoration-1 underline-offset-4">
                  {featured.title}
                </h1>
              </Link>

              {featured.subtitle ? (
                <p className="mt-4 font-serif text-[1rem] italic leading-snug text-grey-dark">
                  {featured.subtitle}
                </p>
              ) : null}

              <p className="mt-4 font-crimson text-[19px] leading-[1.6] tracking-[-0.01em] text-grey-dark">
                {featured.excerpt}
              </p>
            </div>
          </section>
        ) : null}

        <section className="pt-10">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-ink">
              Latest
            </h2>
            <div className="h-px flex-1 bg-grey-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((article) => (
              <StoryCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                href={`/articles/${article.slug}`}
                city={article.city}
                category={article.category}
                image={article.image}
                readTime={article.readTime}
              />
            ))}
          </div>
        </section>

        <section className="pt-12">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-ink">
                Lisbon Cluster
              </h2>
              <div className="h-px w-16 bg-grey-line" />
            </div>

            <Link
              href="/lisbon"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey-text hover:text-ink no-underline"
            >
              Open cluster ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-grey-line p-5">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-[2rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
                Lisbon
              </h3>
              <p className="mt-3 font-crimson text-[18px] leading-[1.6] tracking-[-0.01em] text-grey-dark">
                Wine bars, rooftops, breakfasts, streets, bookshops, cafés and the city’s weekend logic — now grouped properly in one place.
              </p>
              <div className="mt-5">
                <Link
                  href="/lisbon"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink no-underline border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
                >
                  Explore Lisbon
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {lisbon.map((article) => (
                <StoryCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  href={`/articles/${article.slug}`}
                  city={article.city}
                  category={article.category}
                  image={article.image}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-ink">
              Europe & Global
            </h2>
            <div className="h-px flex-1 bg-grey-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {global.map((article) => (
              <StoryCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                href={`/articles/${article.slug}`}
                city={article.city}
                category={article.category}
                image={article.image}
                readTime={article.readTime}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
