const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
          "black": "1C1C1C",
          "content-2": "#585757",
          pressed: "#A4A4A4",
          border: "#E8E8E8",
          "background-secondary": "#F7F7F7",
          "background-primary": "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    plugins: [require('@tailwindcss/forms')]
  }
};
