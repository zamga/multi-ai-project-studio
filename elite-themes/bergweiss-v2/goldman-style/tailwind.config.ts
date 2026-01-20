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
        goldman: {
          black: "#000000",
          charcoal: "#1a1a1a",
          dark: "#0d0d0d",
          gray: "#333333",
          silver: "#666666",
          light: "#999999",
          white: "#ffffff",
          gold: "#b8860b",
          accent: "#7b6834",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
