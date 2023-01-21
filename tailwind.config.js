/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  daisyui: {
    themes: ["corporate", "business"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}