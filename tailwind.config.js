/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef313e',
        dark: '#2f2e4a',
        light: '#6a6c6d',
        main_bg: '#ef313e50',
      },

    },
  },
  plugins: [],
}