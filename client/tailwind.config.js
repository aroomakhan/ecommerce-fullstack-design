/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '86': '86px',    // Header height
        '46': '46px',    // Logo height
        '130': '130px',  // Side padding
        '720': '720px',  // Search bar width
        '48':'48px',
        '1440': '1440px',
        '421': '421px', // input-left width
        '145': '145px', // input-middle width
        '100': '100px', // button width
      },
      colors: {
        'ali-blue': '#0D6EFD',
        'ali-gray': '#8B96A5',
        'ali-blue-dark': '#0067FF',
        'ali-blue-light': '#127FFF',
        'ali-border': '#0D6EFD',
        'ali-gray-text': '#8B96A5',
      }
    },
  },
  plugins: [],
}