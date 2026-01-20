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
        mck: {
          white: "#ffffff",
          light: "#f5f5f5",
          gray: "#e5e5e5",
          mid: "#999999",
          dark: "#333333",
          black: "#000000",
          blue: "#051c2c",
          accent: "#2251ff",
          teal: "#00a9ce",
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
