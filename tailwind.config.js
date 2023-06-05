/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        },
        text: {
          DEFAULT: '#424242',
          lightest: '#DCDCDC',
          primary: '#454545',
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
      pattern: /(bg|text|border)-(rose|primary|secondary|muted|text|border)-(lightest)/,
      variants: ['hover'],
    },
    {
      pattern: /(bg|text|border)-chart(One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven)/,
      variants: ['hover'],
    },
  ],
}

