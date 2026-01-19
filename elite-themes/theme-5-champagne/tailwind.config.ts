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
        champagne: {
          cream: "#faf6f0",
          pearl: "#f5efe6",
          sand: "#e8dfd3",
          taupe: "#c4b5a5",
          bronze: "#8b7355",
          espresso: "#3d3027",
          rose: "#b8a090",
          gold: "#c9a227",
          copper: "#b87333",
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
