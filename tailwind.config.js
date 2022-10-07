/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      slkscr: ["slkscr","ans-serif"],
      Uchen: ["Uchen", "serif"]
    }
  },
  plugins: [],
}
