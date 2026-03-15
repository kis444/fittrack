import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E5282",
        secondary: "#363969",
        neutral: "#8C92AC",
        blush: "#FFDBE3",
        accent: "#FFBFCB",
        "accent-dark": "#FCA6BC",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        card: "0 2px 20px rgba(78,82,130,0.08)",
        "card-hover": "0 8px 40px rgba(78,82,130,0.14)",
        soft: "0 1px 8px rgba(78,82,130,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
