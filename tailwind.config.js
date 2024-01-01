/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:"#010101",
        light:"#f2f0ea",
        yellow:"#edcf5d",
        grey:"#a4a4a4",
        white:"#fff"
      }
    },
  },
  plugins: [],
}

