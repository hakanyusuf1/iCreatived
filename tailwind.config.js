/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg1: "1040px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1536px",
    },

    colors: {
      ...colors,
      side: "#f00f0f",
      burgerBarBg: "#eef1ef",
      lightGrayCustom: "#FFFFED",
    },
  },
  plugins: [],
};
