import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0e1117",
        ink: "#f4f7fb",
        muted: "#9aa4b2",
        line: "rgba(255, 255, 255, 0.11)",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
