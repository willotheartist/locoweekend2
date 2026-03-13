import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { lisbonArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Lisbon",
  description: "The Lisbon cluster: wine bars, rooftops, breakfasts, streets, neighbourhoods, bookshops and the city’s weekend logic.",
  alternates: { canonical: "/lisbon" },
};

export default function LisbonPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Lisbon"
      title="Lisbon"
      description="Wine bars, rooftops, breakfasts, streets, neighbourhoods, bookshops and the city’s weekend logic."
      articles={lisbonArticles()}
    />
  );
}
