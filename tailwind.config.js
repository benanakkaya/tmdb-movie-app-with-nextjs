/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      container: {
        center: true
      },
      colors: {
        veryDark: "#14161D",
        dark: "#191E25",
        lightDark: "#222831",
        customRed: "#BB2D3B",
        customGray: "#383C42"
      }
    },
  },
  plugins: [],
}