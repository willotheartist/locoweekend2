import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Drinks · LocoWeekend",
  description:
    "Wine bars, listening rooms, hotel pours, corner spots, serious bottles, bad decisions and good nights.",
  keywords: ["drinks", "wine bars", "cocktail bars", "locoweekend drinks"],
  alternates: { canonical: "/drinks" },
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
    title: "Drinks · LocoWeekend",
    description:
      "Wine bars, listening rooms, hotel pours, corner spots, serious bottles, bad decisions and good nights.",
    url: "https://locoweekend.com/drinks",
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
    title: "Drinks · LocoWeekend",
    description:
      "Wine bars, listening rooms, hotel pours, corner spots, serious bottles, bad decisions and good nights.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function Page() {
  const articles = getAllArticles().filter(
    (article) => article.category.toLowerCase() === "drinks",
  );
  return (
    <SectionPage
      title="Drinks"
      description="Wine bars, listening rooms, hotel pours and good nights."
      articles={articles}
    />
  );
}
