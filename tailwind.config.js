/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eveleth: ['Eveleth', 'sans-serif'],
        rebeymarrow: ['Ribeye Marrow', 'serif'],
        chunkPlump: ['Chunk Plump', 'sans-serif'],
      },
    },
  },
  plugins: [],
};