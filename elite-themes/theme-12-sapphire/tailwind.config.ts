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
        sapphire: {
          white: "#f8fafc",
          silver: "#cbd5e1",
          steel: "#64748b",
          navy: "#1e3a5f",
          deep: "#0f2744",
          midnight: "#0a1929",
          black: "#050d15",
          gold: "#c9a227",
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
