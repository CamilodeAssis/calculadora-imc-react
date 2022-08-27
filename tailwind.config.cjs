/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'desktop': '769px',
      

      
    },
    extend: {
      colors: {
        'blueh1': '#3A4B5C',
        'greyp': '#6A7B8D',
      },
    },
  },
  plugins: [],
}