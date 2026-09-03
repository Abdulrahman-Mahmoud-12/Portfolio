import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#050c18",
        "bg-deep": "#030810",
        surface: "#0d1526",
        "surface-2": "#162035",
        accent: "#22d3ee",       // cyan-400 — primary
        "accent-2": "#a78bfa",   // violet-400 — secondary
        muted: "#94a3b8",
        "muted-2": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #22d3ee, #a78bfa)",
        "gradient-card": "linear-gradient(145deg, rgba(13,21,38,0.9), rgba(22,32,53,0.6))",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 9s ease-in-out 1s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradient-x 4s ease infinite",
        "glow": "glow 3s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "glow-accent": "0 0 40px rgba(34,211,238,0.15), 0 0 80px rgba(34,211,238,0.05)",
        "glow-violet": "0 0 40px rgba(167,139,250,0.15), 0 0 80px rgba(167,139,250,0.05)",
        "card": "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset",
        "card-hover": "0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
