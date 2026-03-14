import { getAllArticles, type ArticleMeta } from "@/lib/articles";

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

export function affairsArticles() {
  return getAllArticles().filter((a) => {
    const c = n(a.category);
    return c === "affairs" || c === "politics" || c === "business";
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
      return c === "culture" || c === "affairs" || c === "politics" || c === "business";
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
