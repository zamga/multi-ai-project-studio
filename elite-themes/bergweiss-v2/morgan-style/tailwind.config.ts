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
        morgan: {
          navy: "#00263e",
          blue: "#003366",
          sky: "#0066b3",
          light: "#e8f4fc",
          white: "#ffffff",
          gray: "#6b7280",
          dark: "#1f2937",
          silver: "#9ca3af",
          accent: "#00a3e0",
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
