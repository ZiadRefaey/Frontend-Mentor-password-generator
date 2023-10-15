/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-xs": "1rem",
        "custom-sm": "1.125rem",
        "custom-md": "1.5rem",
        "custom-lg": "2rem",
      },
      colors: {
        Black: "#18171F",
        Red: "#F64A4A",
        Orange: "#FB7C58",
        Yellow: "#F8CD65",
        neonGreen: "#A4FFAF",
        offWhite: "#E6E5EA",
        Gray: "#817D92",
        darkGray: "#24232C",
      },
    },
  },
  plugins: [],
};
