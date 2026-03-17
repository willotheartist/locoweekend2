import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to LocoWeekend.",
  alternates: { canonical: "/subscribe" },
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
    title: "Subscribe · LocoWeekend",
    description: "Subscribe to LocoWeekend for independent culture, city guides and anything interesting.",
    url: "https://locoweekend.com/subscribe",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe · LocoWeekend",
    description: "Subscribe to LocoWeekend for independent culture, city guides and anything interesting.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function SubscribePage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Subscribe to LocoWeekend</h1>
        <p>Subscribe to LocoWeekend for independent culture, city guides and anything interesting.</p>
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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-5xl font-semibold tracking-[-0.02em] text-ink">Subscribe</h1>
      <p className="mt-4 font-crimson text-xl text-grey-dark">
        Subscription flow coming next. For now, the route exists so the menu stops breaking.
      </p>
    </div>
  );
}