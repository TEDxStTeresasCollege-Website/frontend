// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}