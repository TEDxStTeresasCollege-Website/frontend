// tailwind.config.js
module.exports = {
  mode: "",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50'
      },
      colors: {
        'card-1': '#877fa8',
        'card-2': '#bd86a6',
        'card-3': '#d47e97',
        'card-4': '#f59193',
        'card-5': '#faad91',
        'card-6': '',
        'card-7': '',
        'night-shade-1': '#031215',
        'night-shade-2': '#001f27',
        'night-shade-3': '#1a4a57'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}