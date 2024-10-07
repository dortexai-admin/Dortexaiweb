/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#12141d',
        customLight:'#5a5a5a',
        grayCustom: '#747584',
      },
      maxWidth: {
        '1400': '1400px',
      },
    },
  },
  plugins: [],
}