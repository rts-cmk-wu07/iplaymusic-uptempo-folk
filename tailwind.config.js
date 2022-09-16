/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      doubleShadow: "10px 10px 10px 10px #0000FF , 0 0 20px 30px #008000",
    },
    extend: {},
  },
  plugins: [],
};
