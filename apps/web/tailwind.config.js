/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'lyra-pattern': "url('/lyra-pattern.svg')",
      },
    },
  },
  plugins: [],
};
