/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'optima': ['Optima', 'serif'],
      'optimaItalic': ['Optima italic', ' serif'],
      'optimaMedium': ['Optima medium', ' serif'],
      'optimaBold': ['Optima bold', ' serif'],
      'inter': ['Inter', 'sans-serif'],
      'interMedium': ['Inter medium', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003858',
          text: '#FFFFFF',
          lightest: '#788CA4',
        },
        secondary: {
          DEFAULT: '#F58220',
          text: '#FFFFFF',
          lightest: 'rgba(245, 130, 32, 0.15)',
        },
        text: {
          DEFAULT: '#424242',
          dark: '#000000',
          light: '#7B7B7B',
          lightest: '#DCDCDC',
        },
        muted: {
          DEFAULT: '#7B7B7B',
          light: '#DDDDDD',
          lightest: '#EFF0EF',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|muted|text|border)-(lightest|light|dark)/,
      variants: ['hover'],
    },
  ],
}

