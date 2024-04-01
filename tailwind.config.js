/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "yellow":"#F4D04E",
        "grey":"hsl(0, 0%, 50%)",
        "black-c":"hsl(0, 0%, 7%)",
        "black-b":"#111111"
      },
      fontFamily:{
        figtree:['Figtree Variable', 'sans-serif']
      },
      boxShadow:{
        '3xl':"8px 8px 0px #000000"
      },
      backgroundColor: {
        primary: "rgb(220, 20, 60)",
        "primary-light": "rgb(228 50 86)",
      },
    },
  },
  plugins: [],
}
