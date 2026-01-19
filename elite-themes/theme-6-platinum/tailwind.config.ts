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
        platinum: {
          black: "#0a0a0a",
          charcoal: "#1a1a1a",
          graphite: "#2d2d2d",
          steel: "#4a4a4a",
          silver: "#c0c0c0",
          platinum: "#e5e4e2",
          white: "#fafafa",
          gold: "#d4af37",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
