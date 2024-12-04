/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      animation: {
        "blink-caret": "blink-caret 1s step-end infinite",
      },
      keyframes: {
        "blink-caret": {
          "50%": { opacity: "0" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
