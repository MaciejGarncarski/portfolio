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
        waves: 'url("/white-waves.webp")'
      },
      borderWidth: {
        layout: '0.75rem',
        'layout-desktop-y': '2.5rem',
        'layout-desktop-x': '4rem'
      },
      colors: {
        primary: colors.slate[800],
        secondary: colors.slate[700]
      },
      screens: {
        sm: '350px'
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
