/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scans all files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'], // For h1 and button
        campton: ['Campton', 'sans-serif'], // For search inputs
      },
      colors: {
        'primary-1': '#10106D', // For text-primary-1 and bg-primary-1
      },
      fontSize: {
        '56px': '56px', // For text-56px
      },
      lineHeight: {
        '84px': '84px', // For leading-84px
      },
    },
  },
  plugins: [],
};