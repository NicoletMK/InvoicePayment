/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfdfd",
          "200": "#1e2125",
          "300": "#121517",
          "400": "rgba(253, 253, 253, 0.2)",
        },
        darkslategray: {
          "100": "#353b43",
          "200": "#213548",
        },
        steelblue: {
          "100": "#4d96da",
          "200": "rgba(77, 150, 218, 0.25)",
        },
        gainsboro: "#d9d9d9",
        lightslategray: "#8999ad",
      },
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "5xs-9": "7.9px",
        "9xs-5": "3.5px",
      },
    },
    fontSize: {
      base: "16px",
      "lg-9": "18.9px",
      sm: "14px",
      "5xl": "24px",
      "17xl": "36px",
      "23xl": "42px",
      xl: "20px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
