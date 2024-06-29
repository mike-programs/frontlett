/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#F9F9F9",
        primary: "#F4F4F4",
        orangeCard: "#F47733",
        darkCard: "#303030",
        pinkCard: "#FF78BF",
        lightPinkCard: "#FF88C6",
        greenCard: "#20888F",
        text: "#4E4E4E",
        lightText: "#8E8E8E",
        heading: "#212121",
      },
      backgroundImage: {
        hero1: "url('/backgrounds/hero-img1.png')",
        hero2: "url('/backgrounds/hero-image2.png')",
        hero3: "url('/backgrounds/hero-image3.png')",
        customGradient:
          "linear-gradient(97.5deg, #212121 -23.93%, rgba(166, 166, 166, 0) 188.9%)",
      },
    },
  },
  plugins: [],
};
