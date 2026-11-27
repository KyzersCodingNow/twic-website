import type { Config } from "tailwindcss";

// Editorial Overprint palette; legacy aliases keep staged routes compatible.
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The three brand colors.
        yellow: "#E8E655", // citron
        ink: "#151515", // carbon
        white: "#F0EFE9", // paper
        // Supporting greys from the deck (borders, muted data).
        line: "#2A2A2A",
        muted: "#8A8A8A",
        // Legacy tokens kept so hidden pages still compile.
        panel: "#1A1A1A",
        gold: "#E8E655",
        bone: "#F0EFE9",
        gain: "#22C55E",
        loss: "#EF4444",
      },
      fontFamily: {
        head: ["var(--font-archivo)", "sans-serif"],
        // Marks & UI + body: Archivo.
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        // Data: timestamps, tickers, episode numbers.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        // Anton headline tracking: 0 to −1%.
        head: "-0.01em",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        blink: "blink 1.4s steps(2, start) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
