import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Art · LocoWeekend",
  description:
    "Street pieces, photocopied flyers, backroom shows, scruffy brilliance and art that lives outside the gallery system.",
  keywords: ["art", "street art", "independent art", "locoweekend art"],
  alternates: { canonical: "/art" },
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
    title: "Art · LocoWeekend",
    description:
      "Street pieces, photocopied flyers, backroom shows, scruffy brilliance and art that lives outside the gallery system.",
    url: "https://locoweekend.com/art",
    siteName: "LocoWeekend",
    type: "website",
    images: [
      {
        url: "https://locoweekend.com/LWICON.png",
        width: 1200,
        height: 630,
        alt: "LocoWeekend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art · LocoWeekend",
    description:
      "Street pieces, photocopied flyers, backroom shows, scruffy brilliance and art that lives outside the gallery system.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function Page() {
  const articles = getAllArticles().filter(
    (article) =>
      article.category.toLowerCase() === "art" ||
      (/art|gallery|museum|design|aesthetic/i.test(
        article.title + " " + (article.subtitle || ""),
      ) &&
        article.category.toLowerCase() === "culture"),
  );
  return (
    <SectionPage
      title="Art"
      description="Art, visual culture and places that change the way you see."
      articles={articles}
    />
  );
}
