/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          100: '#B0ABAB',
          300: '#544F4F',
          500: '#252323',
          700: '#151313',
          900: '#0B0A0A',

        },
        secondary: {
          100: '#E9B8AF',
          300: '#CF624F',
          500: '#A5402D',
          700: '#803123',
          900: '#30120D',

        },
        tertiary: {
          100: '#FFF7C2',
          300: '#FFEF85',
          500: '#FFE74C',
          700: '#F5D400',
          900: '#524700'
        }
      }
    },
  },
  plugins: [],
}

