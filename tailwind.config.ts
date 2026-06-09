import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black background and panels
        ink: "#0A0A0A",
        panel: "#1A1A1A",
        // Gold accent — used sparingly
        gold: "#C9A84C",
        // Off-white text and muted gray
        bone: "#F5F2EA",
        muted: "#8A8A8A",
        // Price movement — reserved exclusively for gains/losses
        gain: "#22C55E",
        loss: "#EF4444",
      },
      fontFamily: {
        // Headlines: bold condensed sans
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        // Body
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Tabular numbers for ticker + portfolio
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
