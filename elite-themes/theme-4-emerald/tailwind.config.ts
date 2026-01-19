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
        emerald: {
          deep: "#0d2818",
          forest: "#1a4731",
          sage: "#2d5a45",
          mint: "#4a7c59",
          light: "#8fbc8f",
          cream: "#f0f5f1",
          ivory: "#fafcfa",
          gold: "#b8860b",
          brass: "#cd9b1d",
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
