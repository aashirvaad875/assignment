// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        backgroundColor: '#f3f5f9',
      },
      width: {
        36: '36.8px',
        111: '111px',
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
      },
      height: {
        13: '49px',
      },
      boxShadow: {
        '3xl': '0px 0px 11px 1px rgb(164 162 162 / 30%)',
        '2xlcustom': '0 2px 6px rgba(0, 0, 0, 0.3)',
        all: '0px 0px 10px 0px rgba(27, 46, 94, 0.13)',
      },
    },
  },
  variants: {
    extend: {},
  },
};
