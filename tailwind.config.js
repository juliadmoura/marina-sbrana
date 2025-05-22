/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xsm: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      dropShadow: {
        header: [
          '0 4px 3px rgb(214 91 110 / 0.03)',
          '0 2px 2px rgb(214 91 110 / 0.02)',
        ],
      },
      width: {
        262: '262px',
        90: '90px',
      },
      fontSize: {
        40: '2.5rem',
      },
      backgroundImage: {
        botox: "url('/src/assets/images/botox.png')",
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
