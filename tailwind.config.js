/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#1d2951",
        primary_1: "#05062d",
        primary_2: "#F95700",
        primary_3: "#e85100"
      },
      fontFamily: {
        nunito: ["nunito"],
        dm_sans: ["dm_sans"],
        Lora: ["Lora"],
      },
      screens: {
        'sm_tablet': '700px',
        'md_phone': '410px',
      },
    },
  },
  plugins: [],
}

