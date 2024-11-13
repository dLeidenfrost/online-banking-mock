import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "hsla(var(--background) / <alpha-value>)",
          foreground: "hsla(var(--foreground) / <alpha-value>)",
          primary: "hsla(var(--primary) / <alpha-value>)",
          secondary: "hsla(var(--secondary) / <alpha-value>)",
          accent: "hsla(var(--accent) / <alpha-value>)",
        },
        dark: {
          background: "hsla(var(--dark-background) / <alpha-value>)",
          foreground: "hsla(var(--dark-foreground) / <alpha-value>)",
          primary: "hsla(var(--dark-primary) / <alpha-value>)",
          secondary: "hsla(var(--dark-secondary) / <alpha-value>)",
          accent: "hsla(var(--dark-accent) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
