/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      doubleShadow: "10px 10px 10px 10px #0000FF , 0 0 20px 30px #008000",
    },

    extend: {
      colors: {
        primaryColor: "#FF1168",
        secondaryColor: "#341931",
        additionalColor: "#111625",
        darkBlue: "#115793",
        lightBlue: "#00a1cb",
        cyanBlue: "#0abebe",
        darkGreen: "#3a7634",
        lightGreen: "#5eb11c",
        yellow: "#f2bc06",
        orange: "#f18d05",
        tomato: "#e54028",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
