export type Article = {
  slug: string;
  title: string;
  city: string;
  category: string;
  section: string; // e.g. "picks"
};

export const ARTICLES: Article[] = [
  {
    slug: "first-pick",
    title: "First Pick — The one we stand behind",
    city: "Beirut",
    category: "Food",
    section: "picks",
  },
  {
    slug: "second-pick",
    title: "Second Pick — Worth the detour",
    city: "Paris",
    category: "Coffee",
    section: "picks",
  },
  {
    slug: "third-pick",
    title: "Third Pick — A proper weekend spot",
    city: "London",
    category: "Stay",
    section: "picks",
  },

  // Example non-picks (won’t show on /picks)
  {
    slug: "random-article",
    title: "Random Article",
    city: "Berlin",
    category: "Culture",
    section: "articles",
  },
];
