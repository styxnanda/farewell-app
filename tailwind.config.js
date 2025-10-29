/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom colors based on the image
      colors: {
        'navy': '#192a51', // The dark blue border/button color
        'cream': '#fdfaf0', // The light beige background
        'slate': '#3c486b', // The text color (a softer dark blue/grey)
      },
      // Add the custom font
      fontFamily: {
        'serif-display': ['"Playfair Display"', 'serif'], // Our main display font
        'sans-cursive': ['"Dancing Script"', 'cursive'] // Example for the cursive line
      }
    },
  },
  plugins: [],
}