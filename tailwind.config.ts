import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#F6F7F9",
        surface: "#FFFFFF",
        ink: "#13203A",
        body: "#3A4357",
        muted: "#687185",
        line: "#DCE1E8",
        pass: { DEFAULT: "#1F7A52", soft: "#E6F2EC" },
        warn: { DEFAULT: "#8A5A00", soft: "#FBF0DA" },
        fail: { DEFAULT: "#B42318", soft: "#FBE8E6" },
      },
      maxWidth: {
        page: "70rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
