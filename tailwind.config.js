/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-pokemon": "#D90D32",
        "blue-pokemon": "#2DA6F4",
        "green-pokemon": "#4EAC5D",
        "red-mid": "#E14B66",
        "dark-green": "#05332F",
        "gold-pokemon": "#A79E11",
      },
    },
  },
  plugins: [],
};
