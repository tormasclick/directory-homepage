/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'],
        campton: ['Campton', 'sans-serif'],
      },
      colors: {
        'primary-1': '#10106D',
        'secondary-1': '#00F5C1',
        'neutral-1': '#DEDEDE',
      },
      fontSize: {
        '56px': '56px',
        '20px': '20px',
        '17px': '17px',
        '16px': '16px',
      },
      lineHeight: {
        '84px': '84px',
        '28px': '28px',
        '22.4px': '22.4px',
      },
      letterSpacing: {
        '-0.4px': '-0.4px',
      },
      padding: {
        '2': '8px', // For p-2
      },
      gap: {
        '2.5': '10px', // For gap-2.5
      },
      borderRadius: {
        'lg': '8px', // Matches rounded-lg
      },
      margin: {
        '2': '8px', // For separator spacing
      },
    },
  },
  plugins: [],
};