/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/assets/style.css'
  ],
  theme: {
    colors: {
      AlmostWhite: 'hsl(0, 0%, 98%)',
      MediumGray: 'hsl(0, 0%, 41%)',
      AlmostBlack: 'hsl(0, 0%, 8%)'
    },
    fontFamily: {
      custom: [`'Epilogue',sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}