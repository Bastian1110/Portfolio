/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      aestethic: ["Georgia"],
      programming: ["Consolas"],
    },
    screens: {
      md: "568px",
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      colors: {
        primarybg: "#1F2029",
        primary: "#B5FFE1",
        secondary: "#E4C1F9",
      },
      animation: {
        typing: "typing 3s steps(34), blink 0.8s infinite",
        appear: "appear 10s infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "34ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "white" },
        },
        appear: {
          from: "opacity-0",
          to: "opacity-100",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
