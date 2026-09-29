/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        beige: "#EFE3CE",
        cardBg: "#FBF6EC",
        espresso: "#2E1B12",
        cocoa: "#6B4E3D",
        terracotta: "#C1552E",
        toastedGold: "#E8B34E",
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
