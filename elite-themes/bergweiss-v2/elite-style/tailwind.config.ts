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
        elite: {
          black: "#0f0f0f",
          dark: "#1a1a1a",
          gray: "#2d2d2d",
          mid: "#4a4a4a",
          silver: "#8a8a8a",
          light: "#d4d4d4",
          white: "#fafafa",
          rose: "#f43f5e",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
