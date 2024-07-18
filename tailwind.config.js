/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-sel": "#4F46E5",
        "gray-uns": "#475569",
        "gains": "#22C55E",
        "loss": "#F43F5E",
        "midnight": "#1E293B"
      }
    },
  },
  plugins: [],
}