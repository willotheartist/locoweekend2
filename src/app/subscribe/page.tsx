import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to LocoWeekend.",
  alternates: { canonical: "/subscribe" },
};

export default function SubscribePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-5xl font-semibold tracking-[-0.02em] text-ink">Subscribe</h1>
      <p className="mt-4 font-crimson text-xl text-grey-dark">
        Subscription flow coming next. For now, the route exists so the menu stops breaking.
      </p>
    </div>
  );
}
