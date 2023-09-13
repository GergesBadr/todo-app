/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { josefin: "Josefin Sans, sans-serif" },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(250, 8%, 96%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 25%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 58%)",
        "very-dark-grayish-blue": "hsl(237, 14%, 26%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
