/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22487A',
        'primary-light': '#3A5C99',
        'primary-dark': '#18325A',
        'background': '#111216',
        'background-paper': '#181A20',
      },
    },
  },
  plugins: [],
}
