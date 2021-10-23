// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      },
      colors: {
        'card-1': '#877fa8',
        'card-2': '#bd86a6',
        'card-3': '#d47e97',
        'card-4': '#f59193',
        'card-5': '#faad91',
        'card-6': '',
        'card-7': '',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}