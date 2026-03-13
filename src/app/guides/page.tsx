import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { guidesArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Guides",
  description: "The useful side of LocoWeekend: best-ofs, where-tos, neighbourhood pieces and properly built city guides.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Guides"
      title="Guides"
      description="Best-ofs, where-tos, neighbourhood pieces and properly built city guides."
      articles={guidesArticles()}
    />
  );
}
