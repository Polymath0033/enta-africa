/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 15s) linear infinite",
        "toast-in": "toast-in 0.3s forwards",
        "toast-out": "toast-out 0.3s forwards",
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
        "toast-in": {
          "0%": { opacity: "0", transform: "translate(-50%, -20px)" },
          "100%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
        "toast-out": {
          "0%": { opacity: "1", transform: "translate(-50%, 0)" },
          "100%": { opacity: "0", transform: "translateY(50%, -20px)" },
        },
      },
    },
  },
  plugins: [],
};
