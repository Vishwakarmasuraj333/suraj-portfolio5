import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFFFF",
          100: "#FCFAF8", // Main warm page background
          200: "#FAF6F0",
          300: "#F5EFE6",
          400: "#EFE6D8",
          500: "#DFD2BE",
        },
        rose: {
          50: "#FFF1F4", // Soft pastel pink section wave
          100: "#FFE4EB",
          200: "#FECDD9",
          500: "#F43F5E", // Primary vibrant pink accent
          600: "#E11D48",
          700: "#BE123C",
        },
        navy: {
          950: "#070B16",
          900: "#0C162C", // Midnight navy footer
          850: "#101C38",
          800: "#16254A",
          700: "#1E3364",
          600: "#2B478B",
        },
        heading: "#111827",
        body: "#4B5563",
        // Pastel accent boxes matching reference
        pastel: {
          purple: {
            bg: "#F5F3FF",
            border: "#E9D5FF",
            icon: "#8B5CF6",
            text: "#6D28D9",
          },
          pink: {
            bg: "#FFF1F2",
            border: "#FECDD3",
            icon: "#F43F5E",
            text: "#BE123C",
          },
          amber: {
            bg: "#FFFBEB",
            border: "#FDE68A",
            icon: "#F59E0B",
            text: "#B45309",
          },
          green: {
            bg: "#F0FDF4",
            border: "#BBF7D0",
            icon: "#10B981",
            text: "#047857",
          },
          blue: {
            bg: "#F0F9FF",
            border: "#BAE6FD",
            icon: "#0EA5E9",
            text: "#0369A1",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        card: "0 20px 40px -15px rgba(244, 63, 94, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)",
        button: "0 10px 25px -5px rgba(244, 63, 94, 0.4)",
        float: "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
