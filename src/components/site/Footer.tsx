import Link from "next/link";

const sections = [
  { label: "Culture", href: "/culture" },
  { label: "Affairs", href: "/affairs" },
  { label: "Fashion", href: "/fashion" },
  { label: "Travel", href: "/travel" },
  { label: "Guides", href: "/guides" },
  { label: "Politics", href: "/politics" },
];

const more = [
  { label: "Lisbon", href: "/lisbon" },
  { label: "The Sauce", href: "/the-sauce" },
  { label: "Dead Stock", href: "/dead-stock" },
  { label: "Magazine", href: "/magazine" },
];

export function Footer() {
  return (
    <footer className="mt-14 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block bg-paper px-5 py-3 no-underline">
              <span className="text-2xl font-extrabold tracking-[0.14em] text-ink">
                LOCO WEEKEND
              </span>
            </Link>
            <p className="max-w-xs text-[11px] leading-relaxed text-concrete">
              Culture, affairs, city systems, nights out, films, food, and whatever still feels alive after midnight.
            </p>
          </div>

          <div className="grid flex-1 gap-8 text-[11px] md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold uppercase tracking-[0.16em] text-paper">
                Sections
              </h3>
              <ul className="space-y-1">
                {sections.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:underline hover:underline-offset-4">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold uppercase tracking-[0.16em] text-paper">
                Clusters
              </h3>
              <ul className="space-y-1">
                {more.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:underline hover:underline-offset-4">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-neutral-800" />

        <div className="mt-4 flex flex-col gap-3 text-[9px] text-concrete md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:underline hover:underline-offset-4">Home</Link>
            <Link href="/lisbon" className="hover:underline hover:underline-offset-4">Lisbon</Link>
            <Link href="/magazine" className="hover:underline hover:underline-offset-4">Magazine</Link>
          </div>
          <div className="text-right">
            <p>© {new Date().getFullYear()} LocoWeekend. All rights reserved.</p>
            <p>Steal nights, not articles.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
