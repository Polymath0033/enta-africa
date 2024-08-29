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
        // #00C65E
        primary: "#009244",
        "light-primary": "#0092440A",
      },
      backgroundImage: {
        hero: "linear-gradient(178deg, rgba(255, 255, 255, 0.19) -79.58%, rgba(255, 255, 255, 0.18) 98.23%)",
        blog: 'url("./src/assets/blog-4.png")',
        //services:
        //'url("./src/assets/vertical-shot-small-isolated-house-shore-sea.jpg") ',
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
