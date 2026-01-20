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
        citadel: {
          black: "#0a0a0a",
          dark: "#111111",
          gray: "#1a1a1a",
          mid: "#2a2a2a",
          silver: "#888888",
          light: "#cccccc",
          white: "#ffffff",
          green: "#00ff88",
          cyan: "#00d4ff",
          purple: "#8b5cf6",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
