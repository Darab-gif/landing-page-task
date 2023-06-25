/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#221C38",
        purple: "#A522C3",
        lightpurple: "#4F4673",
        blue: "#2229D0",
        cyan: "#0EA4C4",
        bg: "#281B4F",
        bglight: "#501F7F",
        bgdark: "#2B2C52",
        gray: "#C6C2D6",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        small: "20px",
        normal: "24px",
        large: "36px",
        xlarge: "76px",
      },
    },
  },
  plugins: [],
};
