/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#E7E3FC3B",
        primary: "#3D4142",
        secondary: "#22282A",
        gray: "#C1C2C4",
        btnHover: "#E0E0E0",
        mainBG: "#181A1C",
        textPrimary: "#3254FF",
        info: "#0F1E93",
        infoHover: "#0367DB",
        error: "#B71F1D",
        errorHover: "#DB3A2A",
      },
    },
  },
  plugins: [],
};
