import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export function Footer() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 6);

  return (
    <footer className="mt-14 border-t border-grey-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Link href="/" className="no-underline">
              <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-ink">
                LocoWeekend
              </div>
            </Link>

            <p className="mt-3 max-w-md font-serif text-[1.02rem] leading-[1.65] text-grey-dark">
              Culture, affairs, cities, systems, nights out, films, food, and anything interesting.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-grey-text">
              Latest stories
            </div>

            <div className="mt-4 grid gap-3">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group no-underline border-b border-grey-line pb-3 last:border-b-0"
                >
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-grey-text">
                    <span>{article.city}</span>
                    <span className="text-grey-line">|</span>
                    <span>{article.category}</span>
                  </div>

                  <div className="mt-1 font-serif text-[1.02rem] leading-snug text-ink group-hover:underline decoration-1 underline-offset-4">
                    {article.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-grey-line pt-4 text-[10px] text-grey-text md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Home
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()} LocoWeekend
          </div>
        </div>
      </div>
    </footer>
  );
}
