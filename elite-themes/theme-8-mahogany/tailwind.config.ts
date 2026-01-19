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
        mahogany: {
          cream: "#faf7f2",
          sand: "#e8e0d5",
          tan: "#c4a77d",
          bronze: "#8b6914",
          brown: "#5c4033",
          mahogany: "#4a2c2a",
          dark: "#2d1b1a",
          black: "#1a0f0e",
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
