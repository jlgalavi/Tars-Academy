import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        // Space Explorer Theme
        space: {
          50: "#faf7ff",
          100: "#f3edff", 
          200: "#e9d8ff",
          300: "#d8b5ff",
          400: "#c084fc",
          500: "#7C3AED",   // Morado espacial primario
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b1764",
        },
        deep: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe", 
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1E3A8A",   // Azul profundo secundario
          900: "#1e3a8a",
        },
        energy: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#F97316",   // Naranja acento
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",  // Texto claro
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0F172A",  // Fondo oscuro elegante
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        cardHover: "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
