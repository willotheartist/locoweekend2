import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { travelArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Travel",
  description: "City weekends, overlooked places, routes worth taking and travel pieces with actual point of view.",
  alternates: { canonical: "/travel" },
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
    title: "Travel · LocoWeekend",
    description: "City weekends, overlooked places, routes worth taking and travel pieces with actual point of view.",
    url: "https://locoweekend.com/travel",
    siteName: "LocoWeekend",
    type: "website",
    images: [{ url: "https://locoweekend.com/LWICON.png", width: 1200, height: 630, alt: "LocoWeekend" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel · LocoWeekend",
    description: "City weekends, overlooked places, routes worth taking and travel pieces with actual point of view.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function TravelPage() {
  return (
    <>
      <div aria-hidden="true" style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>
        <h1>Travel — City Weekends and Places Worth Taking</h1>
        <p>City weekends, overlooked places, routes worth taking and travel pieces with actual point of view.</p>
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
      eyebrow="LocoWeekend / Travel"
      title="Travel"
      description="City weekends, overlooked places, routes worth taking and travel pieces with actual point of view."
      articles={travelArticles()}
      />
    </>
  );
}
