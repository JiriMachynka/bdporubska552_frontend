/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
