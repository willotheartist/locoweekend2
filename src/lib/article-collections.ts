import { getAllArticles, type ArticleMeta } from "@/lib/articles";

const BUSINESS_PILLAR_ORDER = [
  "best-mvp-development-companies-uk-2026",
  "how-much-does-an-mvp-cost-uk-2026",
  "best-saas-development-companies-uk-2026",
  "how-much-does-a-saas-mvp-cost-uk-2026",
  "best-ai-app-development-companies-uk-2026",
  "how-much-does-it-cost-to-build-an-ai-app-uk-2026",
  "best-web-app-development-companies-uk-2026",
  "best-custom-software-development-companies-uk-2026",
  "best-marketplace-development-companies-uk-2026",
  "best-app-development-companies-london-2026",
  "how-much-does-it-cost-to-build-an-app-uk-2026",
  "best-uk-digital-product-companies-2026",
  "freelancer-vs-agency-vs-in-house-mvp-uk-2026",
  "how-long-does-it-take-to-build-an-mvp-uk-2026",
  "who-owns-the-code-when-an-agency-builds-your-app-uk-2026",
  "mvp-vs-prototype-vs-proof-of-concept-uk-2026",
];

function n(value: string) {
  return value.toLowerCase();
}

function textOf(article: ArticleMeta) {
  return `${article.title} ${article.subtitle ?? ""} ${article.excerpt} ${article.city} ${article.category} ${article.slug}`.toLowerCase();
}

function uniqueBySlug(items: ArticleMeta[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

export function allArticles() {
  return getAllArticles();
}

export function lisbonArticles() {
  return getAllArticles().filter((a) => n(a.city) === "lisbon");
}

export function madridArticles() {
  return getAllArticles().filter((a) => n(a.city) === "madrid");
}

export function businessArticles() {
  const priority = new Map(
    BUSINESS_PILLAR_ORDER.map((slug, index) => [slug, index])
  );

  return getAllArticles()
    .filter((a) => {
      const c = n(a.category);
      return c === "business" || c === "tech";
    })
    .sort((a, b) => {
      const aPriority = priority.get(a.slug);
      const bPriority = priority.get(b.slug);

      if (aPriority !== undefined || bPriority !== undefined) {
        if (aPriority === undefined) return 1;
        if (bPriority === undefined) return -1;
        return aPriority - bPriority;
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function affairsArticles() {
  return getAllArticles().filter((a) => {
    const c = n(a.category);
    return c === "affairs" || c === "politics";
  });
}

export function politicsArticles() {
  return getAllArticles().filter((a) => {
    const c = n(a.category);
    return c === "politics" || c === "affairs";
  });
}

export function fashionArticles() {
  return uniqueBySlug(
    getAllArticles().filter((a) => {
      const t = textOf(a);
      const c = n(a.category);
      return (
        c === "fashion" ||
        t.includes("menswear") ||
        t.includes("gorpcore") ||
        t.includes("vintage") ||
        t.includes("style") ||
        t.includes("beige empire") ||
        t.includes("dead stock") ||
        t.includes("fashion")
      );
    })
  );
}

export function travelArticles() {
  return uniqueBySlug(
    getAllArticles().filter((a) => {
      const t = textOf(a);
      const c = n(a.category);
      return (
        c === "travel" ||
        t.includes("weekend") ||
        t.includes("guide") ||
        t.includes("visit") ||
        t.includes("city") ||
        t.includes("neighbourhood") ||
        t.includes("rooftop") ||
        t.includes("breakfast") ||
        t.includes("bookshops") ||
        t.includes("lisbon") ||
        t.includes("madrid") ||
        t.includes("barcelona") ||
        t.includes("bilbao") ||
        t.includes("balearics")
      );
    })
  );
}

export function guidesArticles() {
  return uniqueBySlug(
    getAllArticles().filter((a) => {
      const t = textOf(a);
      return (
        a.slug.startsWith("best-") ||
        t.includes(" best ") ||
        t.includes("guide") ||
        t.includes("where to") ||
        t.includes("top ") ||
        t.includes("worth visiting")
      );
    })
  );
}

export function magazineArticles() {
  return uniqueBySlug(
    getAllArticles().filter((a) => {
      const c = n(a.category);
      return c === "culture" || c === "affairs" || c === "politics" || c === "business" || c === "tech";
    })
  );
}

export function theSauceArticles() {
  return getAllArticles().slice(0, 12);
}

export function deadStockArticles() {
  return uniqueBySlug([
    ...fashionArticles(),
    ...getAllArticles().filter((a) => {
      const t = textOf(a);
      return (
        t.includes("vintage") ||
        t.includes("record shops") ||
        t.includes("beige empire") ||
        t.includes("too good for tourists")
      );
    }),
  ]);
}
