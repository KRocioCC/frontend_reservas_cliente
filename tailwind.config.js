/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#D92332",
        turquesa: "#41BFB3",
        hueso: "#F2EFEB",
        naranja: "#F28627",
        coral: "#F25E3D",
        negro: "#1E1E1E",
      },
      minHeight: {
        '24': '6rem',
      }
    },
  },
  plugins: [],
}
