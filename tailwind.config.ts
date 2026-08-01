import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#16A34A",
          light: "#22C55E",
          dark: "#15803D",
        },
        offwhite: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        cardHover: "0 12px 32px -8px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
