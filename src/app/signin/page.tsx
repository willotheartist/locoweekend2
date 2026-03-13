import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to LocoWeekend.",
  alternates: { canonical: "/signin" },
};

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-5xl font-semibold tracking-[-0.02em] text-ink">Sign In</h1>
      <p className="mt-4 font-crimson text-xl text-grey-dark">
        Sign-in flow coming next. For now, the route exists so the menu stops breaking.
      </p>
    </div>
  );
}
