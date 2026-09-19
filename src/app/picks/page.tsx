import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Picks · LocoWeekend",
  description:
    "The pieces we stand behind. Start here for the best of LocoWeekend.",
  keywords: [
    "picks",
    "best of locoweekend",
    "recommended reading",
    "locoweekend picks",
  ],
  alternates: { canonical: "/picks" },
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
    title: "Picks · LocoWeekend",
    description:
      "The pieces we stand behind. Start here for the best of LocoWeekend.",
    url: "https://locoweekend.com/picks",
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
    title: "Picks · LocoWeekend",
    description:
      "The pieces we stand behind. Start here for the best of LocoWeekend.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function Page() {
  const articles = getAllArticles().filter((article) =>
    [
      "the-22-pound-smash-burger-problem",
      "the-bar-you-only-find-twice",
      "placebo-are-still-here",
      "the-gorpcore-plateau",
      "the-subscription-trap",
      "hawala-the-invisible-bank",
      "the-passport-economy",
      "welcome-to-the-beige-empire",
    ].includes(article.slug),
  );
  return (
    <SectionPage
      title="Editor's picks"
      description="A few stories to start with. Culture, cities, big ideas and small obsessions."
      articles={articles}
    />
  );
}
