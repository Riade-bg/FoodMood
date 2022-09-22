/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif'], 
      'Dela': ['Dela Gothic One','sans-serif'],
      'yeseva': ['Yeseva One', 'sans-serif'],
    },
  },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
