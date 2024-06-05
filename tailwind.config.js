/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 15s) linear infinite",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#E33E33",
      },
      backgroundImage: {
        hero: "linear-gradient(178deg, rgba(255, 255, 255, 0.19) -79.58%, rgba(255, 255, 255, 0.18) 98.23%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
