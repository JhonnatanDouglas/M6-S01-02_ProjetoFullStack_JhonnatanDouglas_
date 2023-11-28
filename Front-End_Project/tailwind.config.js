const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "310px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.neutral,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
    fontFamily: { default: ["Roboto", "ui-serif", "ui-sans-serif"] },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
