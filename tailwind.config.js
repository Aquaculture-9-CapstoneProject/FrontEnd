/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#093E58",
          200: "#0A4766",
          300: "#0C5174",
          400: "#0D5B82", // main
          500: "#0E6590",
          600: "#106E9E",
          700: "#1178AC",
          800: "#1382B9",
        },
        secondary: {
          100: "#0F6B99",
          200: "#1175A7",
          300: "#127FB5",
          400: "#1388C3",
          500: "#1F92C5", // main
          600: "#169CDF",
          700: "#20A6E9",
          800: "#2EACEA",
          900: "#3CB1EC",
        },
        error: {
          100: "#881337",
          200: "#9F1239",
          300: "#BE123C", // main
          400: "#E11D48",
          500: "#F43F5E",
        },
        neutral: {
          100: "#262626", // main
          200: "#525252",
          300: "#A3A3A3",
          400: "#E5E5E5",
          500: "#FAFAFA", // main
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
  },
};
