/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sriracha', 'cursive', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sand: {
          'body' : '#f3d7bf',
          'article' : '#e4dbc9',
          'navbar' : '#bb977d',
          'font' : '#3b2712',
        },
      },
    },
  },
  plugins: [],
}
