const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'exo-black': "1C1C1C",

        'exo-blue': {
          base: "#0085FF",
          hover: "#339DFF",
          pressed: "#1272CC",
          border: "#CCE7FF",
          background: "#E5F3FF",
        },

        'exo-red':{
          base: "#E92C2C",
          hover: "#ED5656",
          pressed: "#BA2323",
          border: "#FBD5D5",
          background: "#FFECEC",
        },

        'exo-grayscale': {
          base: "#F7F7F7",
          border: "#E8E8E8",
          pressed: "#A4A4A4",
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    variants: {
      extend: {}
    },
    plugins: [require('@tailwindcss/forms')]
  }
};
