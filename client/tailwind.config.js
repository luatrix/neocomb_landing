/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    rotate: {
      'y-180': '180deg',
    },
    backgroundImage: {
        'hex': "url('/assets/hex-pattern.svg')"
      }
  },
  fontFamily: {
        sans: ['"Baloo 2"', 'ui-sans-serif', 'system-ui'],
      },
  },
  plugins: [],
}


