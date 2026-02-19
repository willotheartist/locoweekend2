import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FAFAF7",
        concrete: "#B3B3B3",
        yellow: "#FFF100",
        "grey-line": "#D4D4D0",
        "grey-text": "#888888",
        "grey-dark": "#444444",
        loco: {
          red: "#FF2A32",
        },
      },
      fontFamily: {
        // Use CSS vars provided by next/font
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
        crimson: ["var(--font-crimson)", "Georgia", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
      fontSize: {
        // More generous typography scale for editorial
        xs: ["11px", { lineHeight: "1.4" }],
        sm: ["13px", { lineHeight: "1.5" }],
        base: ["15px", { lineHeight: "1.6" }],
        lg: ["17px", { lineHeight: "1.65" }],
        xl: ["20px", { lineHeight: "1.7" }],
        "2xl": ["24px", { lineHeight: "1.3" }],
        "3xl": ["32px", { lineHeight: "1.2" }],
        "4xl": ["42px", { lineHeight: "1.1" }],
        "5xl": ["56px", { lineHeight: "1.05" }],
        "6xl": ["72px", { lineHeight: "1" }],
        "7xl": ["96px", { lineHeight: "1" }],
      },
      spacing: {
        // Add more granular spacing options
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "8.5": "2.125rem",
        "12.5": "3.125rem",
        "14": "3.5rem",
        "16": "4rem",
        "18": "4.5rem",
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "32": "8rem",
      },
      maxWidth: {
        // Monocle-inspired wider content area
        article: "750px",
        prose: "800px",
        "7xl": "80rem",
        "8xl": "88rem",
      },
      borderRadius: {
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 16px 40px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;