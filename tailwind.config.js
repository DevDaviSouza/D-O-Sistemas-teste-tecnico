/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#313131',
        'components-color': '#7E7E7E'
      },
    },
  },
  plugins: [],
}