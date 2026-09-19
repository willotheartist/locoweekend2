import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Grub · LocoWeekend",
  description:
    "After-shift plates, 3am kebabs, corner cafés with opinions. No tasting menu propaganda.",
  keywords: ["food", "restaurants", "grub", "locoweekend grub"],
  alternates: { canonical: "/grub" },
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
    title: "Grub · LocoWeekend",
    description:
      "After-shift plates, 3am kebabs, corner cafés with opinions. No tasting menu propaganda.",
    url: "https://locoweekend.com/grub",
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
    title: "Grub · LocoWeekend",
    description:
      "After-shift plates, 3am kebabs, corner cafés with opinions. No tasting menu propaganda.",
    images: ["https://locoweekend.com/LWICON.png"],
  },
};

export default function Page() {
  const articles = getAllArticles().filter(
    (article) => article.category.toLowerCase() === "grub",
  );
  return (
    <SectionPage
      title="Food"
      description="The tables, kitchens and corner spots worth an appetite."
      articles={articles}
    />
  );
}
