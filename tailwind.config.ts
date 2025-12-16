import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "void-black": "#0E0E0E",
        "deep-surface": "#121212",
        "prism-yellow": "#F3E68F",
        "prism-pink": "#EFA9B6",
        "prism-cyan": "#4AF2EA"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(243, 230, 143, 0.25)",
        neon: "0 0 80px rgba(74, 242, 234, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
