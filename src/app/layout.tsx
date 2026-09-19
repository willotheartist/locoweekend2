import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Barlow_Condensed, IBM_Plex_Mono, Crimson_Pro } from "next/font/google";

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

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${crimson.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink flex flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
