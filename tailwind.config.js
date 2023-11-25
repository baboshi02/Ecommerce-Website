/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
	"./index.html",
	"./src/**/*.jsx"
],
  theme: {
    extend: {
      colors:{
      PrimaryColor:"#1D1D1D",
      SecondaryColor:"#2272FF"
      }
    },
  },
  plugins: [],
}

