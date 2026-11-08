import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--muted-foreground)",
        surface: "var(--surface)",
        "lesson-surface": "var(--lesson-surface)",
        "lesson-badge": "var(--lesson-badge)",
        "lesson-badge-fg": "var(--lesson-badge-fg)",
        "review-surface": "var(--review-surface)",
        "review-accent": "var(--review-accent)",
        "review-accent-fg": "var(--review-accent-fg)",
        border: "var(--border)",
        "control-border": "var(--control-border)",
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        "dark-chip": "var(--dark-chip)",
        "dark-chip-fg": "var(--dark-chip-fg)",
        "focus-ring": "var(--focus-ring)",
        success: {
          DEFAULT: "var(--success)",
          bg: "var(--success-bg)",
        },
        error: {
          DEFAULT: "var(--error)",
          bg: "var(--error-bg)",
        },
      },
      fontFamily: {
        body: ["var(--font-thai)", "IBM Plex Sans Thai", "Noto Sans Thai", "Sukhumvit Set", "Thonburi", "sans-serif"],
        display: ["var(--font-en)", "Plus Jakarta Sans", "Avenir Next", "Helvetica Neue", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
    },
  },
  plugins: [],
} satisfies Config;
