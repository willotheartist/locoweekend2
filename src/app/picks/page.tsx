import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picks · LocoWeekend",
  description: "The pieces we stand behind. Start here for the best of LocoWeekend.",
  keywords: ["picks", "best of locoweekend", "recommended reading", "locoweekend picks"],
  alternates: { canonical: "/picks" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Picks · LocoWeekend",
    description: "The pieces we stand behind. Start here for the best of LocoWeekend.",
    url: "https://locoweekend.com/picks",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picks · LocoWeekend",
    description: "The pieces we stand behind. Start here for the best of LocoWeekend.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

import Link from "next/link";
import { getBySection } from "@/content/articles";

export default function PicksPage() {
  const articles = getBySection("picks");

  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Picks — The Pieces We Stand Behind</h1>
        <p>The pieces we stand behind. Start here for the best of LocoWeekend.</p>
        <nav>
          <a href="/">Home</a>
          <a href="/magazine">Magazine</a>
          <a href="/the-sauce">The Sauce</a>
          <a href="/culture">Culture</a>
          <a href="/affairs">Affairs</a>
          <a href="/fashion">Fashion</a>
          <a href="/travel">Travel</a>
          <a href="/guides">Guides</a>
          <a href="/politics">Politics</a>
          <a href="/art">Art</a>
          <a href="/drinks">Drinks</a>
          <a href="/flicks">Flicks</a>
          <a href="/grub">Grub</a>
          <a href="/dead-stock">Dead Stock</a>
          <a href="/picks">Picks</a>
          <a href="/lisbon">Lisbon</a>
          <a href="/madrid">Madrid</a>
          <a href="/subscribe">Subscribe</a>
        </nav>
      </div>
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-extrabold leading-tight tracking-tight">
        Picks
      </h1>
      <p className="mb-6 text-sm text-neutral-800">
        The pieces we stand behind. Start here.
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