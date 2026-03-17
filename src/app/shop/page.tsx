import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop · LocoWeekend",
  description: "Limited prints, zines, tees and collaborations from LocoWeekend.",
  keywords: ["locoweekend shop", "locoweekend zines", "locoweekend prints"],
  alternates: { canonical: "/shop" },
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
    title: "Shop · LocoWeekend",
    description: "Limited prints, zines, tees and collaborations from LocoWeekend.",
    url: "https://locoweekend.com/shop",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop · LocoWeekend",
    description: "Limited prints, zines, tees and collaborations from LocoWeekend.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function ShopPage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>LocoWeekend Shop</h1>
        <p>Limited prints, zines, tees and collaborations from LocoWeekend.</p>
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
        Shop
      </h1>
      <p className="mb-4 text-sm text-neutral-800">
        Limited prints, zines, tees, and collaborations coming soon.
      </p>
      <p className="text-xs text-neutral-700 uppercase tracking-[0.16em]">
        No drop-shipped nonsense. Only things we&apos;d actually wear, pin, or tape to a wall.
      </p>
    </div>
  </>
  );
}