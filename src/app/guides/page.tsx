import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { guidesArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Guides",
  description: "The useful side of LocoWeekend: best-ofs, where-tos, neighbourhood pieces and properly built city guides.",
  alternates: { canonical: "/guides" },
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
    title: "Guides · LocoWeekend",
    description: "The useful side of LocoWeekend: best-ofs, where-tos, neighbourhood pieces and properly built city guides.",
    url: "https://locoweekend.com/guides",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides · LocoWeekend",
    description: "The useful side of LocoWeekend: best-ofs, where-tos, neighbourhood pieces and properly built city guides.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function GuidesPage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Guides — Best-Ofs, Where-Tos and City Guides</h1>
        <p>The useful side of LocoWeekend: best-ofs, where-tos, neighbourhood pieces and properly built city guides.</p>
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
      eyebrow="LocoWeekend / Guides"
      title="Guides"
      description="Best-ofs, where-tos, neighbourhood pieces and properly built city guides."
      articles={guidesArticles()}
      />
    </>
  );
}
