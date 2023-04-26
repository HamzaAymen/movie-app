/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightBlue: "#3DD2CC",
        loadingGrey: "#191919",
        lightGrey: "#202021",
        milkey: "#bebebf",
      },
    },
  },
  plugins: [],
};
