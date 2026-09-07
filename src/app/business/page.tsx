import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { businessArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Business",
  description:
    "LocoWeekend Business covers UK tech, startups, digital products, software companies, marketplaces, AI, SaaS and the companies building what comes next.",
  alternates: { canonical: "/business" },
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
    title: "Business · LocoWeekend",
    description:
      "UK tech, startups, digital products, software companies, marketplaces, AI, SaaS and the companies building what comes next.",
    url: "https://locoweekend.com/business",
    siteName: "LocoWeekend",
    type: "website",
    images: [
      {
        url: "https://locoweekend.com/LWICON.png",
        width: 1200,
        height: 630,
        alt: "LocoWeekend Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business · LocoWeekend",
    description:
      "UK tech, startups, digital products, software companies, marketplaces, AI, SaaS and the companies building what comes next.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function BusinessPage() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        <h1>LocoWeekend Business</h1>
        <p>
          UK tech, startups, digital products, software companies, marketplaces,
          AI, SaaS and the companies building what comes next.
        </p>
        <nav>
          <a href="/">Home</a>
          <a href="/business">Business</a>
          <a href="/magazine">Magazine</a>
          <a href="/culture">Culture</a>
          <a href="/affairs">Affairs</a>
          <a href="/travel">Travel</a>
          <a href="/guides">Guides</a>
        </nav>
      </div>

      <SectionPage
        eyebrow="LocoWeekend / Business"
        title="Business"
        description="UK tech, startups, digital products, software companies, marketplaces, AI, SaaS and the companies building what comes next."
        articles={businessArticles()}
      />
    </>
  );
}
