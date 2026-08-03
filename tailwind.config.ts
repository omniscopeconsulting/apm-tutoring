import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#081b33", 900: "#0d2745", 800: "#15395f" },
        brand: { 50: "#eef7ff", 100: "#d9edff", 200: "#b9dcfb", 500: "#1684e8", 600: "#0b6fc9", 700: "#095baa" },
        gold: { 400: "#f7bd38", 500: "#e9a91e" },
      },
      boxShadow: { card: "0 16px 45px -24px rgba(8, 27, 51, .28)" },
      animation: { float: "float 6s ease-in-out infinite", fadeup: "fadeup .7s ease-out both" },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        fadeup: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
} satisfies Config;
