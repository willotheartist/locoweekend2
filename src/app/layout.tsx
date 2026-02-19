// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EB_Garamond, Anonymous_Pro, Crimson_Pro } from "next/font/google";

export const metadata: Metadata = {
  title: "LOCO WEEKEND",
  description:
    "LocoWeekend — anti tourist-trap street magazine. London & Madrid. No PR. No influencers.",
};

const serif = EB_Garamond({
  subsets: ["latin"],
  // ✅ rename so we can map it cleanly in globals.css without self-referencing
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Anonymous_Pro({
  subsets: ["latin"],
  variable: "--font-anon-pro",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} ${crimson.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink flex flex-col">
        <div
          className="fixed inset-0 -z-10 lw-noise-bg opacity-30"
          aria-hidden="true"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
