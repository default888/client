/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "370px",
      tablet: "768px",
      laptop: "1280px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "gc-primary": "var(--gc-primary)",
        "gc-primary-hover": "var(--gc-primary-hover)",
        "gc-secondary": "var(--gc-secondary)",
        "gc-tertiary": "var(--gc-tertiary)",
        "gc-sucess": "var(--gc-sucess)",
        "gc-error": "var(--gc-error)",
        "gc-dark-balck": "var(--gc-dark-balck)",
        "gc-dark-gray": "var(--gc-dark-gray)",
        "gc-gray": "var(--gc-gray)",
        "gc-gray-light": "var(--gc-gray-light)",
        "gc-white": "var(--gc-white)",
        "gc-text-dark-blue": "var(--gc-text-dark-blue)",
        "gc-text-dark-gray": "var(--gc-text-dark-gray)",
        "gc-text-light": "var(--gc-text-light)",
      },
      fontFamily: {
        sans: ["Gotham Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
