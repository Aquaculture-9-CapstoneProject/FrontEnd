/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#093E58",
          2: "#0A4766",
          3: "#0C5174",
          4: "#0D5B82", // main
          5: "#0E6590",
          6: "#106E9E",
          7: "#1178AC",
          8: "#1382B9",
        },
        secondary: {
          1: "#0F6B99",
          2: "#1175A7",
          3: "#127FB5",
          4: "#1388C3",
          5: "#1F92C5", // main
          6: "#169CDF",
          7: "#20A6E9",
          8: "#2EACEA",
          9: "#3CB1EC",
        },
        error: {
          1: "#881337",
          2: "#9F1239",
          3: "#BE123C", // main
          4: "#E11D48",
          5: "#F43F5E",
        },
        neutral: {
          1: "#262626", // main
          2: "#525252",
          3: "#A3A3A3",
          4: "#E5E5E5",
          5: "#FAFAFA", // main
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
  },
};
