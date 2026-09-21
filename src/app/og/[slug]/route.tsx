import { ImageResponse } from "next/og";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { getArticleSection } from "@/lib/sections";

// Typographic share card for articles that ship without a photo, so og:image and
// twitter:image are never empty. Prerendered at build time, one per article.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return new Response("Not found", { status: 404 });

  const section = getArticleSection(article).title.toUpperCase();
  const title = article.title;
  const fontSize = title.length > 70 ? 58 : title.length > 45 ? 68 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0b",
          color: "#ffffff",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, letterSpacing: 4 }}>
          <div style={{ display: "flex", background: "#FFF100", color: "#0b0b0b", padding: "8px 18px", fontWeight: 700 }}>{section}</div>
          <div style={{ display: "flex", color: "#9a9a9a" }}>{article.city.toUpperCase()}</div>
        </div>
        <div style={{ display: "flex", fontSize, lineHeight: 1.06, fontWeight: 700, letterSpacing: -1.5 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #FFF100", paddingTop: 24 }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: 2 }}>
            LOCOWEEKEND<span style={{ color: "#FFF100" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#9a9a9a" }}>For the independently curious</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
