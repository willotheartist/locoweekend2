import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EB_Garamond, Anonymous_Pro, Crimson_Pro } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://locoweekend.com"),
  title: {
    default: "LocoWeekend · Culture, Affairs, & anything interesting",
    template: "%s · LocoWeekend",
  },
  description:
    "LocoWeekend — anti tourist-trap street magazine. Culture, affairs, cities, systems, food, film, and anything interesting.",
  applicationName: "LocoWeekend",
  keywords: [
    "culture magazine",
    "city magazine",
    "independent magazine",
    "film culture",
    "food culture",
    "affairs",
    "london culture",
    "madrid culture",
    "locoweekend",
  ],
  authors: [{ name: "LocoWeekend" }],
  creator: "LocoWeekend",
  publisher: "LocoWeekend",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://locoweekend.com",
    siteName: "LocoWeekend",
    title: "LocoWeekend · Culture, Affairs, & anything interesting",
    description:
      "LocoWeekend — anti tourist-trap street magazine. Culture, affairs, cities, systems, food, film, and anything interesting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocoWeekend · Culture, Affairs, & anything interesting",
    description:
      "LocoWeekend — anti tourist-trap street magazine. Culture, affairs, cities, systems, food, film, and anything interesting.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "culture",
};

const serif = EB_Garamond({
  subsets: ["latin"],
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