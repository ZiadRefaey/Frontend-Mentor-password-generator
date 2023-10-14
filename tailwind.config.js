/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#24232C",
        Red: "#F64A4A",
        Orange: "#FB7C58",
        Yellow: "#FB7C58",
        NeonGreen: "#A4FFAF",
        OffWhite: "#E6E5EA",
        Gray: "#817D92",
        DarkGray: "#24232C",
      },
    },
  },
  plugins: [],
};
