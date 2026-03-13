import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { travelArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Travel",
  description: "City weekends, overlooked places, routes worth taking and travel pieces with actual point of view.",
  alternates: { canonical: "/travel" },
};

export default function TravelPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Travel"
      title="Travel"
      description="City weekends, overlooked places, routes worth taking and travel pieces with actual point of view."
      articles={travelArticles()}
    />
  );
}
