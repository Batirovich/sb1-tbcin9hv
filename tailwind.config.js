/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#1a365d',
          800: '#1e429f',
          700: '#1a4fd1',
        }
      }
    },
  },
  plugins: [],
};