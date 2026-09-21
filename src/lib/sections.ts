// Editorial ownership is independent of legacy article URLs.
export const sections = [
  { id: "movies-series", title: "Movies & Series", href: "/movies-series", description: "What to watch, why it works, and LocoWeekend ratings that explain the verdict." },
  { id: "culture", title: "Culture", href: "/culture", description: "Music, film, art and the ideas shaping how we spend our time. Stories about what we make, what we watch and what stays with us." },
  { id: "technology", title: "Technology", href: "/technology", description: "The devices, platforms and digital systems woven into everyday life. What they do, who controls them and what happens when they stop working." },
  { id: "business", title: "Business", href: "/business", description: "Follow the money. Pricing, ownership, work and the businesses behind everyday life, alongside practical research on building digital products." },
  { id: "affairs", title: "Affairs", href: "/affairs", description: "Power, policy and the systems we live inside. Clear explanations of the decisions shaping countries, cities and everyday life." },
  { id: "style", title: "Style", href: "/style", description: "Clothes, objects and the meaning we give them. Materials, design, identity and the business of wanting something new." },
  { id: "food-drink", title: "Food & Drink", href: "/food-drink", description: "What we eat, what we drink and everything that happens before it reaches the table. Food science, drinking culture and places worth knowing." },
  { id: "travel", title: "Travel", href: "/travel", description: "Places worth understanding as well as visiting. City guides, overlooked destinations and journeys with a point of view." },
] as const;
export type SectionId = typeof sections[number]["id"];
const overrides: Record<string, SectionId> = {
  "the-netflix-effect": "movies-series",
  "why-movie-dialogue-is-so-quiet": "movies-series",
  "do-you-own-digital-movies-games": "technology",
  "the-gorpcore-plateau": "style",
  "why-menswear-is-suddenly-interesting-again": "style",
  "top-30-pubs-in-london": "food-drink",
  "best-cocktail-bars-in-madrid-2024": "food-drink",
  "best-cafes-in-lisbon-for-reading-writing-and-hiding-out": "food-drink",
  "best-cafes-in-madrid-for-reading-writing-and-hiding-out": "food-drink",
  "who-owns-the-mediterranean": "affairs",
};
const categories: Record<string, SectionId> = {
  culture: "culture", music: "culture", flicks: "movies-series", film: "movies-series", "movies & series": "movies-series", art: "culture",
  tech: "technology", technology: "technology", business: "business",
  affairs: "affairs", politics: "affairs", fashion: "style", style: "style",
  grub: "food-drink", food: "food-drink", drinks: "food-drink", "food & drink": "food-drink",
  travel: "travel", guides: "travel",
};
export function getArticleSection(article: { slug: string; category: string }) {
  const id = overrides[article.slug] || categories[article.category.toLowerCase()] || "culture";
  return sections.find(section => section.id === id)!;
}
