/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "font-arial": ["Arial"],
        "font-bookAntiqua": "BookAntiqua",
      },
      colors:{
        'box-color':"#d9d9d9",
      },
    },
  },
  plugins: [],
};
