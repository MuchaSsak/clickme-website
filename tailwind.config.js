/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: { 900: "rgb(5, 5, 5)", 800: "rgb(29, 29, 29)" },
        magenta: "rgb(245, 26, 187)",
      },
      padding: {
        primary: "clamp(2rem,10vw,16rem)",
      },
    },
  },
  plugins: [],
};
