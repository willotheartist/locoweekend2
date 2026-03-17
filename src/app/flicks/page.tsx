import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flicks · LocoWeekend",
  description: "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
  keywords: ["film", "cinema", "movies", "locoweekend flicks"],
  alternates: { canonical: "/flicks" },
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
    title: "Flicks · LocoWeekend",
    description: "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
    url: "https://locoweekend.com/flicks",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flicks · LocoWeekend",
    description: "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

import Link from "next/link";
import { articleIndex } from "@/content/articles";

export default function FlicksPage() {
  const articles = articleIndex; // later: filter by a "flicks" tag/section

  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Flicks — Cinema That Feels Like a Weekend</h1>
        <p>Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.</p>
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
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight">
        Flicks
      </h1>
      <p className="mb-6 text-sm text-neutral-800">
        Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.
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