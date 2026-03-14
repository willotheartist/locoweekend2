import Link from "next/link";

const sections = [
  { label: "Culture", href: "/culture" },
  { label: "Affairs", href: "/affairs" },
  { label: "Fashion", href: "/fashion" },
  { label: "Travel", href: "/travel" },
  { label: "Guides", href: "/guides" },
  { label: "Politics", href: "/politics" },
  { label: "Drinks", href: "/drinks" },
  { label: "Grub", href: "/grub" },
  { label: "Flicks", href: "/flicks" },
];

const cities = [
  { label: "Lisbon", href: "/lisbon" },
  { label: "Madrid", href: "/madrid" },
];

const editorial = [
  { label: "The Sauce", href: "/the-sauce" },
  { label: "Dead Stock", href: "/dead-stock" },
  { label: "Magazine", href: "/magazine" },
  { label: "Picks", href: "/picks" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Culture", href: "/culture" },
  { label: "Travel", href: "/travel" },
  { label: "Lisbon", href: "/lisbon" },
  { label: "Madrid", href: "/madrid" },
  { label: "Magazine", href: "/magazine" },
];

function FooterList({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-4 font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="font-serif text-[1.02rem] leading-[1.35] text-ink no-underline hover:underline decoration-1 underline-offset-4"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-grey-line bg-paper text-ink">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-10 sm:pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="bg-ink px-4 py-2">
                <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-paper">
                  LocoWeekend
                </span>
              </div>
              <div className="h-px w-16 bg-grey-line" />
            </div>

            <h2 className="mt-7 max-w-[11ch] font-serif text-[3rem] sm:text-[3.6rem] leading-[0.92] tracking-[-0.045em] text-ink">
              Culture, cities, nights and whatever still feels alive.
            </h2>

            <p className="mt-6 max-w-[34ch] font-serif text-[1.06rem] leading-[1.72] text-grey-dark">
              LocoWeekend covers culture, affairs, film, food, streets,
              nightlife, weekends away and the stranger corners of modern city
              life.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-ink no-underline hover:underline decoration-1 underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
              <FooterList title="Sections" items={sections} />
              <FooterList title="Cities" items={cities} />
              <FooterList title="Editorial" items={editorial} />
            </div>

            <div className="mt-12 border-t border-grey-line pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text mb-3">
                  Read next
                </div>
                <div className="space-y-3">
                  <Link
                    href="/articles/best-neighbourhoods-in-madrid-for-a-weekend"
                    className="block no-underline group"
                  >
                    <div className="font-serif text-[1.08rem] leading-[1.2] text-ink group-hover:underline decoration-1 underline-offset-4">
                      Best Neighbourhoods in Madrid for a Weekend
                    </div>
                  </Link>

                  <Link
                    href="/articles/best-wine-bars-in-lisbon-right-now"
                    className="block no-underline group"
                  >
                    <div className="font-serif text-[1.08rem] leading-[1.2] text-ink group-hover:underline decoration-1 underline-offset-4">
                      Best Wine Bars in Lisbon Right Now
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text mb-3">
                  Loco note
                </div>
                <p className="font-serif text-[1rem] italic leading-[1.65] text-grey-dark max-w-[30ch]">
                  Cities make more sense when you stop trying to conquer them
                  and start letting one good street lead to the next.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-grey-line pt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-grey-text">
            © {new Date().getFullYear()} LocoWeekend
          </div>

          <div className="text-left md:text-right">
            <p className="font-serif text-[1rem] italic text-grey-dark">
              Steal nights, not articles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;