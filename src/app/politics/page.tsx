import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { politicsArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Politics",
  description: "Politics at street level and state level: borders, policy, power and what ideology looks like once it hits daily life.",
  alternates: { canonical: "/politics" },
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
    title: "Politics · LocoWeekend",
    description: "Politics at street level and state level: borders, policy, power and what ideology looks like once it hits daily life.",
    url: "https://locoweekend.com/politics",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politics · LocoWeekend",
    description: "Politics at street level and state level: borders, policy, power and what ideology looks like once it hits daily life.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function PoliticsPage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Politics — Borders, Policy and Power at Street Level</h1>
        <p>Politics at street level and state level: borders, policy, power and what ideology looks like once it hits daily life.</p>
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
      <SectionPage
      eyebrow="LocoWeekend / Politics"
      title="Politics"
      description="Borders, policy, power and what ideology looks like once it hits daily life."
      articles={politicsArticles()}
      />
    </>
  );
}
