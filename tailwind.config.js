/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        88: "22rem",
      },
      colors: {
        primary: "#6466f1",
      },
    },
  },
  plugins: [],
};
