/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","/usr/lib/node_modules/daisyui"],
  theme: {
    colors:{
      'background':'#1E2022',
      'card':'#393E46',
      'button-bg':'#222831'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
