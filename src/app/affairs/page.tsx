import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { affairsArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Affairs",
  description: "Power, money, systems, statecraft, crisis and the stories shaping how cities and countries actually function.",
  alternates: { canonical: "/affairs" },
};

export default function AffairsPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Affairs"
      title="Affairs"
      description="Power, money, systems, statecraft, crisis and the stories shaping how cities and countries actually function."
      articles={affairsArticles()}
    />
  );
}
