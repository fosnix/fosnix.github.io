/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Madimi': ['"Madimi One"', 'regular'],
        'press-start': ['"Press Start 2P"', 'regular']
      },
      dropShadow: {
        glowOrange: [
          "0 0px 10px rgba(241, 90, 34, 0.35)",
          "0 0px 10px rgba(241, 90, 34, 0.35)"
        ]
      }
    },
  },
  plugins: [],
}
