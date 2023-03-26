/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'cold': "url('/assets/cold.jpg')",
        'sunny': "url('/assets/sunny.jpg')",
      }
    },
  },
  plugins: [],
};
