/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        metalmania: ['Metalmania', 'sans-serif'], // Schriftart Metalmania einbinden
      },
    },
  },
  plugins: [],
};
