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
        espresso: {
          white: "#fdfcfa",
          cream: "#f5f0e8",
          latte: "#e8dfd3",
          caramel: "#c9a86c",
          mocha: "#8b7355",
          coffee: "#5c4033",
          dark: "#3d2b1f",
          black: "#1a1410",
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
