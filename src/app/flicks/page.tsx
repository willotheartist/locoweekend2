import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Flicks · LocoWeekend",
  description:
    "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
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
    description:
      "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
    url: "https://locoweekend.com/flicks",
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
    title: "Flicks · LocoWeekend",
    description:
      "Films, late-night screenings, bootlegs, VHS dreams. Cinema that feels like a weekend, not a syllabus.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function Page() {
  const articles = getAllArticles().filter(
    (article) =>
      article.category.toLowerCase() === "flicks" ||
      /cinema|cinephile|netflix|film|movie/i.test(article.title),
  );
  return (
    <SectionPage
      title="Film"
      description="Films, screens and the culture around them."
      articles={articles}
    />
  );
}
