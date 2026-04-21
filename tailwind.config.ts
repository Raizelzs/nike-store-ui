import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)"],
        condensed: ["var(--font-barlow)"]
      },
      colors: {
        baseBlack: "var(--black)",
        baseWhite: "var(--white)",
        accent: "var(--accent)",
        accent2: "var(--accent2)"
      }
    }
  },
  plugins: []
};

export default config;
