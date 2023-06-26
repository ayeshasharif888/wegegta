/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hColor: '#8A5C28',
        pColor: '#ED8E26',
        tColor: '#434343',
        sColor: '#F7F7F7',
        bgcColor: '#FFF5E9',
        bColder: '#5B5B5B'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

