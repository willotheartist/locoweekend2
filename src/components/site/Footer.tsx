//·src/components/site/Footer.tsx
import Link from "next/link";

const sections = [
  { label: "Flicks", href: "/flicks" },
  { label: "Grub", href: "/grub" },
  { label: "Drinks", href: "/drinks" },
  { label: "Art", href: "/art" },
  { label: "Culture", href: "/culture" },
  { label: "Picks", href: "/picks" },
];

const more = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pitch Guidelines", href: "/pitches" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="mt-14 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        {/* Top row: logo + columns */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* LocoWeekend mark */}
          <div className="flex flex-col gap-3">
            <div className="inline-block bg-paper px-5 py-3">
              <span className="text-2xl font-extrabold tracking-[0.14em] text-ink">
                LOCO WEEKEND
              </span>
            </div>
            <p className="max-w-xs text-[11px] leading-relaxed text-concrete">
              An anti tourist-trap magazine for people who still pay attention
              to what cities feel like after midnight.
            </p>
          </div>

          {/* Sections */}
          <div className="grid flex-1 gap-8 text-[11px] md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold uppercase tracking-[0.16em] text-paper">
                Sections
              </h3>
              <ul className="space-y-1">
                {sections.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold uppercase tracking-[0.16em] text-paper">
                More
              </h3>
              <ul className="space-y-1">
                {more.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold uppercase tracking-[0.16em] text-paper">
                Follow
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:underline-offset-4"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-neutral-800" />

        {/* Bottom row: links + rights */}
        <div className="mt-4 flex flex-col gap-3 text-[9px] text-concrete md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:underline hover:underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="text-right">
            <p>© {new Date().getFullYear()} LocoWeekend. All rights reserved.</p>
            <p>
              No content may be reproduced without permission. Steal nights, not
              articles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
