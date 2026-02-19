import Link from "next/link";
import { articleIndex } from "@/content/articles";

export default function GrubPage() {
  const articles = articleIndex; // later: filter to food pieces

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight">
        Grub
      </h1>
      <p className="mb-6 text-sm text-neutral-800">
        After-shift plates, 3am kebabs, corner cafés with opinions. No tasting menu propaganda.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group flex h-full flex-col justify-between border border-black/25 bg-paper px-3 py-3 text-sm shadow-[3px_3px_0_rgba(0,0,0,1)] transition-transform duration-150 hover:-translate-y-1"
          >
            <div className="mb-2 flex gap-2 text-[9px] uppercase tracking-[0.18em] text-neutral-800">
              <span className="px-1.5 py-[2px] border border-black/50">
                {a.city}
              </span>
              <span>{a.category}</span>
            </div>
            <h2 className="mb-3 text-sm font-semibold leading-snug group-hover:underline">
              {a.title}
            </h2>
            <span className="mt-auto text-[9px] uppercase tracking-[0.16em] text-neutral-700">
              Read story ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
