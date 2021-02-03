const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lightBlue: colors.lightBlue,
      emerald: colors.emerald,
      cyan: colors.cyan,
      blue: colors.blue,
      teal: colors.teal,
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
