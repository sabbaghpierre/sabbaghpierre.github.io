/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","/usr/lib/node_modules/daisyui"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
