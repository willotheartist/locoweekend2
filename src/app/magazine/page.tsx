import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { magazineArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Magazine",
  description: "Longform LocoWeekend: culture, affairs, politics, systems and city life with a longer memory.",
  alternates: { canonical: "/magazine" },
};

export default function MagazinePage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Magazine"
      title="Magazine"
      description="Longform culture, affairs, politics, systems and city life with a longer memory."
      articles={magazineArticles()}
    />
  );
}
