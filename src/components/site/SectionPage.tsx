import Link from "next/link";
import Image from "next/image";
import type { ArticleMeta } from "@/lib/articles";

type Props = {
  title: string;
  description: string;
  eyebrow?: string;
  articles: ArticleMeta[];
};

export function SectionPage({ title, description, eyebrow, articles }: Props) {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-12">
      <header className="border-b border-grey-line pb-8">
        {eyebrow ? (
          <div className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-grey-text">
            {eyebrow}
          </div>
        ) : null}

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl font-crimson text-[20px] leading-normal tracking-[-0.01em] text-grey-dark">
          {description}
        </p>
      </header>

      {featured ? (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-8 border-b border-grey-line">
          <div className="lg:col-span-7">
            <Link
              href={`/articles/${featured.slug}`}
              className="block no-underline group"
            >
              <div className="relative overflow-hidden bg-grey-line/30 aspect-video">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.18em] uppercase text-grey-text">
                    {featured.city}
                  </div>
                )}
              </div>
            </Link>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 flex-wrap font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-grey-text">
              <span>{featured.city}</span>
              <span className="text-grey-line">|</span>
              <span>{featured.category}</span>
              <span className="text-grey-line">|</span>
              <span>{featured.readTime}</span>
            </div>

            <Link
              href={`/articles/${featured.slug}`}
              className="block no-underline group mt-4"
            >
              <h2 className="font-serif text-[2rem] sm:text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.02em] text-ink group-hover:underline decoration-1 underline-offset-4">
                {featured.title}
              </h2>
            </Link>

            {featured.subtitle ? (
              <p className="mt-4 font-serif text-[1.02rem] italic leading-snug text-grey-dark">
                {featured.subtitle}
              </p>
            ) : null}

            <p className="mt-4 font-crimson text-[19px] leading-[1.6] tracking-[-0.01em] text-grey-dark">
              {featured.excerpt}
            </p>

            <div className="mt-5 font-mono text-[10px] tracking-[0.16em] uppercase text-grey-text">
              By {featured.author}
            </div>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="py-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <article key={a.slug} className="group">
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex h-full flex-col justify-between border border-black/15 bg-paper px-4 py-4 no-underline transition-transform duration-150 hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-3 flex gap-2 flex-wrap font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-800">
                      <span className="px-1.5 py-0.5 border border-black/40">
                        {a.city}
                      </span>
                      <span>{a.category}</span>
                    </div>

                    <h3 className="font-serif text-[1.1rem] font-semibold leading-[1.15] text-ink group-hover:underline decoration-1 underline-offset-4">
                      {a.title}
                    </h3>

                    <p className="mt-3 font-crimson text-[17px] leading-[1.55] tracking-[-0.01em] text-grey-dark line-clamp-4">
                      {a.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-700">
                    <span>{a.readTime}</span>
                    <span>Read story ↗</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
