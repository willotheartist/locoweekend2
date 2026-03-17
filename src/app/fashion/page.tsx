import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { fashionArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Fashion",
  description: "Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear.",
  alternates: { canonical: "/fashion" },
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
    title: "Fashion · LocoWeekend",
    description: "Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear.",
    url: "https://locoweekend.com/fashion",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion · LocoWeekend",
    description: "Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function FashionPage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Fashion — Menswear, Aesthetics and What People Wear</h1>
        <p>Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear.</p>
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
      eyebrow="LocoWeekend / Fashion"
      title="Fashion"
      description="Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear."
      articles={fashionArticles()}
      />
    </>
  );
}
