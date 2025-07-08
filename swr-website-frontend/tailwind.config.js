// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD600', // yellow
          dark: '#FFC400',
        },
        background: {
          DEFAULT: '#18181b', // dark background
        },
      },
      // Remove backgroundImage if not used
    },
  },
  plugins: [],
}