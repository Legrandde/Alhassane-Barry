/** @type {import('tailwindcss').Config} */
const tailwindcssAnimate = require('tailwindcss-animate');
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimate,
  ],
}

