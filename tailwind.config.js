/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      side: "#f00f0f",
      burgerBarBg: "#eef1ef",
      lightGrayCustom: "#FFFFED",
    },
  },
  plugins: [],
};
