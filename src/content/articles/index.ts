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
  slug: "the-hotel-lobby-as-coworking-space",
  title: "The Hotel Lobby as Co-Working Space",
  subtitle:
    "Ace, Hoxton and CitizenM figured it out first. Now every hotel is redesigning its ground floor for people who never check in.",
  excerpt:
    "Once a transitional space, the hotel lobby has become the most valuable square footage in the building. As remote work reshapes cities, brands are monetising presence — not just overnight stays.",
  city: "London",
  category: "Culture",
  author: "Wills Duroy",
  date: "2026-02-19",
  readTime: "25 min",
  image: "/images/global/hotel-lobby.jpg",
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
  slug: "why-menswear-is-suddenly-interesting-again",
  title: "Why Menswear Is Suddenly Interesting Again",
  subtitle:
    "Phoebe Philo's return, Loewe's rise, quiet tailoring, anti-streetwear — men's fashion is having its most creative moment in a decade",
  excerpt:
    "After the streetwear decade, menswear is shifting from logos to language: cut, fabrication, restraint, and ideas. The money is moving too — and the creative director chairs suggest this isn’t a trend but a structural reset.",
  city: "Global",
  category: "Culture",
  author: "Wills Mayani",
  date: "2026-02-19",
  readTime: "20 min",
  image: "/images/global/menswear-interesting.jpg",
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
    image: "/images/london/shoreditch.jpg",
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
