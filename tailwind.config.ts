import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f0",
        ink: "#1f1235",
        coral: "#ff6b6b",
        violet: "#7c5cff",
        teal: "#16c2a3",
        sunshine: "#ffc94d",
        bubblegum: "#ff7ac6",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        playful: "0 18px 0 -6px rgba(31, 18, 53, 0.12)",
        "playful-lg": "0 24px 50px -12px rgba(124, 92, 255, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
