const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'scale-show': {
          '0%': {
            transform: 'scaleX(0)'
          },
          '100%': {
            transform: 'scaleX(1)'
          }
        }
      },
      animation: {
        'link-active': 'scale-show 0.5s ease-in-out forwards'
      },
      backgroundImage: {
        waves: 'url("/white-waves.webp")',
        'waves-dark': 'url("/papyrus-dark.webp")'
      },
      borderWidth: {
        layout: '11px',
        'layout-desktop': '55px'
      },
      colors: {
        primary: colors.slate[900],
        secondary: colors.slate[700]
      },
      screens: {
        sm: '300px'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};
