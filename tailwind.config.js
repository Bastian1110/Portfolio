/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B5FFE1",
        secondary: "#E4C1F9",
      },
      animation: { typing: "typing 2s steps(32), blink 0.8s infinite" },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "32ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "white" },
        },
      },
    },
  },
  plugins: [],
};
