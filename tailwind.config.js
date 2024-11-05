/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Scans all HTML and JS files in the src folder
    "./index.html", // Scans the index.html file in the root
    "./feed/index.html", // Scans the feed page
    "./profile/index.html", // Scans the profile page
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
