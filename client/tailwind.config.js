/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'dark-green':'#013914',
      'dark-gray':'#4c4c4c',
      'light-green':'#1dbf73',

      }
    },
  },
  plugins: [],
}