/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        'light-grey': "hsl(217, 12%, 63%)",
        'medium-grey': "hsl(216, 12%, 54%)",
        'dark-blue': "hsl(213, 19%, 18%)",
        'very-dark-blue': "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", 'sans-serif'],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};