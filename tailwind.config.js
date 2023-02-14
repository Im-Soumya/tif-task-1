/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        primaryBlue: "#0E2368",
        bodyBlack: "#444957",
        dimGray: "#646874",
        jasper: "#E23744",
        spaceCadet: "rgba(30, 42, 93, 0.04)",
        cornflowerBlue: "rgba(48, 62, 130, 0.04)",
        chineseBlue: "rgba(60, 80, 157, 0.04)",
      },
    },
  },
  plugins: [],
};
