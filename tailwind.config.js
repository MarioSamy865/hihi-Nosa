/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heart': "url('/src/assets/BG.png')",
        'broken-heart': "url('/src/assets/BG2.png')",
      }
    },
  },
  plugins: [require("daisyui", "tailwindcss-rtl")],

  daisyui:
  {
    themes: ["valentine"]
  }
}