import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";
import { fashionArticles } from "@/lib/article-collections";

export const metadata: Metadata = {
  title: "Fashion",
  description: "Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear.",
  alternates: { canonical: "/fashion" },
};

export default function FashionPage() {
  return (
    <SectionPage
      eyebrow="LocoWeekend / Fashion"
      title="Fashion"
      description="Menswear, aesthetics, uniforms, vintage and the cultural politics of what people wear."
      articles={fashionArticles()}
    />
  );
}
