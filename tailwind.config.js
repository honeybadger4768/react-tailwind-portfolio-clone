/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-my": "#0050ff",
        "bej": "#e6dace",
        "bej-light": "#f4ece6"
      },
      textColor: {
        "blue-my": "#2e70fc"
      },
      borderColor: {
        "blue-my": "#0050ff"
      }
    },
  },
  plugins: [],
}