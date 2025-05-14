/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        262: '262px',
      },
    },
    colors: {
      'rosa-claro': '#FFE2E4',
      'rosa-medio': '#EC7684',
      'rosa-escuro': '#D6586E',
      preto: '#1A1A1A',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
