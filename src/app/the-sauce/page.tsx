import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { theSauceArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "The Sauce",
  description: "The freshest LocoWeekend stories, quick hitters, scene pieces and recent dispatches.",
  alternates: { canonical: "/the-sauce" },
};

export default function TheSaucePage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / The Sauce"
      title="The Sauce"
      description="The freshest stories, quick hitters, scene pieces and recent dispatches."
      articles={theSauceArticles()}
    />
  );
}
