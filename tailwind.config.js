/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BookMyShow:{
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
        Sample:{50: '#2B3149', 100: '#2B3149', 200: '#2B3149', 300: '#2B3149', 400: '#2B3149', 500: '#2B3149', 600: '#2B3149', 700: '#2B3149', 800: '#2B3149', 900: '#2B3149'},
      }
    },
  },
  plugins: [],
}

