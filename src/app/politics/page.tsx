import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { politicsArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Politics",
  description: "Politics at street level and state level: borders, policy, power and what ideology looks like once it hits daily life.",
  alternates: { canonical: "/politics" },
};

export default function PoliticsPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Politics"
      title="Politics"
      description="Borders, policy, power and what ideology looks like once it hits daily life."
      articles={politicsArticles()}
    />
  );
}
