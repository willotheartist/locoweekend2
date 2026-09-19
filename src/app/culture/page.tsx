import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Culture at LocoWeekend: essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
  alternates: {
    canonical: "/culture",
  },
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
    title: "Culture · LocoWeekend",
    description:
      "Essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
    url: "https://locoweekend.com/culture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Culture · LocoWeekend",
    description:
      "Essays, film, fashion, media, city scenes, and the people, aesthetics, and systems shaping modern urban life.",
  },
};

export default function Page() {
  const articles = getAllArticles().filter((article) =>
    ["culture", "music", "flicks", "fashion", "art"].includes(
      article.category.toLowerCase(),
    ),
  );
  return (
    <SectionPage
      title="Culture"
      description="Film, music, style and the ideas that refuse to sit still."
      articles={articles}
    />
  );
}
