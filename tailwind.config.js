/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-purple': {
          600: '#c50ea5', // Add your hex color value
        },
      },
    },
  },
  plugins: [],
}