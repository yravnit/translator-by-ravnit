/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285f4',
          'blue-hover': '#1a73e8',
          'blue-dark': '#1967d2',
        }
      },
      borderRadius: {
        'pill': '100px',
      },
    },
  },
  plugins: [],
};