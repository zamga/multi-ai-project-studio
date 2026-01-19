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
        ivory: {
          white: "#fffef9",
          cream: "#faf8f3",
          pearl: "#f0ede6",
          sand: "#d4cfc4",
          taupe: "#9a9285",
          stone: "#6b6560",
          charcoal: "#3d3a36",
          black: "#1a1917",
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
