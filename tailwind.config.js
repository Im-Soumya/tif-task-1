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
        jasper: "#E23744",
      },
    },
  },
  plugins: [],
};
