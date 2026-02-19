// src/content/articles/index.ts

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  city: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  section?: string; // optional override if you want it later
}

export const articleIndex: Article[] = [
  {
    slug: "lebanons-infinite-crisis-explained",
    title: "Lebanon's Infinite Crisis, Explained",
    subtitle:
      "How a country's currency lost 98% of its value and daily life just… continued",
    excerpt:
      "Since 2019, the Lebanese pound has collapsed by more than 98%, banks froze savings, electricity largely vanished and yet daily life persists. How does a country absorb economic freefall and keep moving?",
    city: "Beirut",
    category: "Politics",
    author: "Wills Duroy",
    date: "2026-02-19",
    readTime: "11 min",
    image: "/images/global/lebanon-crisis.jpg",
    featured: false,
  },
  {
  slug: "the-greenland-question",
  title: "The Greenland Question Nobody’s Asking the Greenlanders",
  subtitle:
    "56,000 people caught between Danish sovereignty, American ambition, and Chinese mining interests. What do they actually want?",
  excerpt:
    "Greenland is discussed in Washington, Copenhagen and Beijing as a strategic prize. But beneath the Arctic rhetoric lies a quieter question: how does a nation of 56,000 build independence without becoming someone else’s asset?",
  city: "Global",
  category: "Affairs",
  author: "Wills Duroy",
  date: "2026-02-19",
  readTime: "18 min",
  image: "/images/global/greenland-question.jpg",
  featured: false,
},

  {
    slug: "who-owns-the-mediterranean",
    title: "Who Owns the Mediterranean?",
    subtitle:
      "Superyacht marinas, private islands, and the quiet land grab reshaping Southern Europe's coastlines",
    excerpt:
      "From Côte d’Azur marinas to Greek island concessions and Spanish Golden Visa developments, capital is quietly redrawing the Mediterranean. The coastline remains public in theory — but increasingly controlled in practice.",
    city: "Mediterranean",
    category: "Politics",
    author: "Wills Duroy",
    date: "2026-02-19",
    readTime: "19 min",
    image: "/images/global/mediterranean-marina.jpg",
    featured: false,
  },
  {
    slug: "welcome-to-the-beige-empire",
    title: "Welcome to the Beige Empire",
    subtitle: "How London's café culture became a copy-paste nightmare",
    excerpt:
      "Every new opening looks the same: fluted panels, terrazzo, oat milk on tap. We walked twelve cafés in Zone 2 and couldn't tell them apart. Here's what happened to personality.",
    city: "London",
    category: "Culture",
    author: "Wills Duroy",
    date: "2026-02-14",
    readTime: "6 min",
    image: "/images/london/beige-empire.jpg",
    featured: false,
  },
  {
  slug: "the-gorpcore-plateau",
  title: "The Gorpcore Plateau",
  subtitle:
    "Arc'teryx and Salomon conquered the city. Now what?",
  excerpt:
    "From Shoreditch to SoHo to Le Marais, technical outerwear became the urban uniform. But every aesthetic cycle plateaus. Outdoor-luxury has stabilized — and workwear is emerging as the next serious signal.",
  city: "London",
  category: "Culture",
  author: "Wills Duroy",
  date: "2026-02-19",
  readTime: "21 min",
  image: "/images/global/gorpcore.jpg",
  featured: false,
},

  {
    slug: "hawala-the-invisible-bank",
    title: "Hawala: The Invisible Bank",
    subtitle:
      "The centuries-old trust network that still moves billions across borders with no paperwork and no app",
    excerpt:
      "From Somali remittances to Afghan markets and Western terror investigations, hawala remains one of the world's most resilient financial systems — informal, trust-based, and still moving billions beyond the reach of modern banking.",
    city: "Global",
    category: "Affairs",
    author: "Wills Mayani",
    date: "2026-02-19",
    readTime: "22 min",
    image: "/images/global/hawala.jpg",
    featured: false,
  },
  {
    slug: "the-subscription-trap",
    title: "The Subscription Trap",
    subtitle: "How recurring revenue changed human behaviour",
    excerpt:
      "From streaming to software to groceries, recurring payments quietly reshaped how we consume, commit and forget.",
    city: "Global",
    category: "Business",
    author: "Wills Duroy",
    date: "2026-02-19",
    readTime: "8 min",
    image: "/images/global/subscription-trap.jpg",
    featured: false,
  },
  {
    slug: "the-netflix-effect",
    title: "The Netflix Effect",
    subtitle: "How streaming killed cinematic risk",
    excerpt:
      "Budgets keep climbing, yet the work feels flatter: safer scripts, noisier spectacle, rushed finishing and fewer films that genuinely divide opinion. Streaming didn’t kill cinema outright. It rewired what movies are for.",
    city: "Global",
    category: "Flicks",
    author: "Wills Duroy",
    date: "2026-02-19",
    readTime: "10 min",
    image: "/images/global/netflix-effect.jpg",
    featured: false,
  },
  {
    slug: "the-passport-economy",
    title: "The Passport Economy",
    subtitle:
      "Why citizenship, tax, and geography are becoming business decisions",
    excerpt:
      "Residency visas, tax arbitrage and mobility incentives have turned nationality into strategy. In 2026, where you live is less about identity and more about optimisation.",
    city: "Global",
    category: "Politics",
    author: "Wills Duroy",
    date: "2026-02-18",
    readTime: "9 min",
    image: "/images/global/passport-economy.jpg",
    featured: false,
  },
  {
    slug: "the-22-pound-smash-burger-problem",
    title: "The £22 Smash Burger Problem",
    subtitle: "How Instagram turned simple food into luxury theatre",
    excerpt:
      "From £22 smash burgers to £8.50 chocolate strawberries at Borough Market, simple food is becoming algorithmic spectacle. When did lunch turn into performance?",
    city: "London",
    category: "Grub",
    author: "Wills Duroy",
    date: "2026-02-19",
    readTime: "8 min",
    image: "/images/global/22-burger.jpg",
    featured: true,
  },
  {
    slug: "the-bar-you-only-find-twice",
    title: "The Bar You Only Find Twice",
    subtitle: "A Soho legend that doesn't want to be found",
    excerpt:
      "No sign, no Google listing, no influencer has ever posted it. The bartender knows your name by your second visit — if you can find it again.",
    city: "London",
    category: "Drinks",
    author: "Wills Duroy",
    date: "2026-02-12",
    readTime: "4 min",
    image: "/images/london/bar-twice.jpg",
  },

  {
    slug: "what-beirut-eats-now",
    title: "What Beirut Eats Now",
    subtitle: "A city rebuilding itself one kitchen at a time",
    excerpt:
      "After everything, the restaurants came back first. Not the fancy ones — the neighbourhood spots. The ones where the cook is also the owner, the waiter, and the accountant.",
    city: "Beirut",
    category: "Grub",
    author: "Wills Mayani",
    date: "2026-02-04",
    readTime: "9 min",
    image: "/images/beirut/eats-now.jpg",
  },
  {
    slug: "nigos-next-move",
    title: "Nigo's Next Move",
    subtitle: "Inside Kenzo's quiet revolution",
    excerpt:
      "While everyone was watching the big houses implode, Nigo was doing something nobody expected: making clothes people actually want to wear.",
    city: "Paris",
    category: "Threads",
    author: "Wills Mayani",
    date: "2026-02-02",
    readTime: "5 min",
    image: "/images/paris/nigo.jpg",
  },
  {
    slug: "the-last-record-shop-in-madrid",
    title: "The Last Record Shop in Madrid",
    subtitle: "Vinyl, dust, and a man who won't give up",
    excerpt:
      "Antonio has been selling records from the same shop since 1983. The rent has tripled, the customers have halved, and he's never been happier.",
    city: "Madrid",
    category: "Sound",
    author: "Wills Mayani",
    date: "2026-01-30",
    readTime: "6 min",
    image: "/images/madrid/record-shop.jpg",
  },
  {
    slug: "why-every-politician-eats-the-same-lunch",
    title: "Why Every Politician Eats the Same Lunch",
    subtitle: "Power, sandwiches, and the performance of normality",
    excerpt:
      "From Westminster to the Élysée, there's a reason every leader is photographed eating something beige and inoffensive. We investigated.",
    city: "London",
    category: "Politics",
    author: "Wills Mayani",
    date: "2026-01-28",
    readTime: "4 min",
    image: "/images/london/politician-lunch.jpg",
  },
  {
    slug: "film-picks-feb-26",
    title: "Film Picks: February 2026",
    subtitle: "What to watch this month",
    excerpt:
      "A Romanian horror film shot on a phone, a Senegalese coming-of-age epic, and the best British comedy in years. Our editors pick the month's essential viewing.",
    city: "London",
    category: "Flicks",
    author: "Wills Mayani",
    date: "2026-02-01",
    readTime: "3 min",
    image: "/images/london/film-picks.jpg",
  },
  {
    slug: "is-shoreditch-still-cool",
    title: "Is Shoreditch Still Cool?",
    subtitle: "How a neighbourhood becomes a business model",
    excerpt:
      "Shoreditch didn’t collapse. It professionalised. The numbers, the language, and the leases explain why — and what ‘cool’ costs once attention turns into yield.",
    city: "London",
    category: "Culture",
    author: "Wills Mayani",
    date: "2026-02-17",
    readTime: "8 min",
    image: "/images/london/shoreditch-cool.jpg",
  },
];

/* ---------------------------------------------
   Helpers (for /picks + whatever else)
--------------------------------------------- */

function inferSection(a: Article): string {
  // If you ever set section explicitly, it wins:
  if (a.section) return a.section.toLowerCase();

  // Simple rule: featured content = picks
  if (a.featured) return "picks";

  // Otherwise infer from category
  const c = (a.category || "").toLowerCase();

  // These are "editorial picks" buckets (adjust anytime)
  if (c === "grub" || c === "drinks") return "picks";

  if (c === "culture" || c === "threads" || c === "sound" || c === "flicks")
    return "culture";

  if (c === "politics" || c === "affairs" || c === "business")
    return "magazine";

  return "magazine";
}

/**
 * ✅ This is what your /picks page imports:
 *   import { getBySection } from "@/content/articles";
 */
export function getBySection(section: string): Article[] {
  const s = section.toLowerCase().trim();
  return articleIndex
    .filter((a) => inferSection(a) === s)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllArticles(): Article[] {
  return [...articleIndex].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeatured(): Article[] {
  return articleIndex
    .filter((a) => !!a.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * You had this as async, but it doesn't need to be.
 * (Keeping it sync avoids unnecessary async in RSC.)
 */
export function getArticle(slug: string): Article | null {
  const article = articleIndex.find((a) => a.slug === slug);
  return article ?? null;
}
