import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { deadStockArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Dead Stock",
  description: "Vintage, menswear, design leftovers, aesthetic shifts and the kind of culture that still has texture in the seams.",
  alternates: { canonical: "/dead-stock" },
};

export default function DeadStockPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Dead Stock"
      title="Dead Stock"
      description="Vintage, menswear, design leftovers, aesthetic shifts and the kind of culture that still has texture in the seams."
      articles={deadStockArticles()}
    />
  );
}
