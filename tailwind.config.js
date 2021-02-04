const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
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
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
