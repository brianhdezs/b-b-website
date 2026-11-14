import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#f5f5f5",
        // Paleta oficial BMASB inspirada en la escala de referencia:
        // Night (#111111), Eerie Black (#232323), Jet (#343434), Outer Space (#464646), Davy's Gray (#575757)
        arch: {
          50: "#fafafa",
          100: "#f5f5f5", // Texto principal y destaques blancos
          200: "#d4d4d4", // Texto secundario claro
          300: "#8a8a8a", // Texto auxiliar / leyendas
          400: "#575757", // [Davy's gray] Acentos de borde activos y metadatos
          500: "#464646", // [Outer space] Líneas estructurales y bordes principales
          600: "#343434", // [Jet] Superficies elevadas, botones secundarios y separadores
          700: "#2c2c2c", // Contenedores interactivos
          800: "#232323", // [Eerie black] Tarjetas de proyecto y paneles
          850: "#1c1c1c", // Superficie de tarjetas y modales
          900: "#161616", // Fondo secundario
          950: "#111111", // [Night] Fondo base del sitio
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        widest: "0.25em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
