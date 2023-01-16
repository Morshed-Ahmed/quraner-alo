/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["AmiriQuran"],
      second: ["Montserrat"],
    },
  },
  plugins: [require("daisyui")],
};
