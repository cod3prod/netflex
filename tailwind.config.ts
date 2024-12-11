import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-hover": "var(--background-hover)",
        "background-dark": "var(--background-dark)",
        "background-card": "var(--background-card)",
        foreground: "var(--foreground)",
        "foreground-hover": "var(--foreground-hover)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
