import type { Config } from "tailwindcss";

/* Colors live in CSS variables (app/globals.css) so light and dark share one set of class names. */
const v = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        paper: v("paper"),
        surface: v("surface"),
        ink: { DEFAULT: v("ink"), hover: v("ink-hover") },
        "on-ink": v("on-ink"),
        body: v("body"),
        muted: v("muted"),
        line: v("line"),
        pass: { DEFAULT: v("pass"), soft: v("pass-soft") },
        warn: { DEFAULT: v("warn"), soft: v("warn-soft") },
        fail: { DEFAULT: v("fail"), soft: v("fail-soft") },
      },
      maxWidth: {
        page: "120rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
