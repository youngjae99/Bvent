module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   primary: '#1E1E1E',
    //   secondary: '#2E2E2E',
    //   tertiary: '#3E3E3E',
    //   quaternary: '#4E4E4E',
    //   glass1: 'rgba(42,48,60,1)',
    // },
    extend: {
      colors: {
        primary: {
          light: '#f59cbf',
          DEFAULT: '#EE5390',
          dark: '#e8196a',
        },
        secondary: {
          light: '#41e7f4',
          DEFAULT: '#0EDAE9',
          dark: '#0baeba',
        },
        tertiary: '#1DF2DD',
        glass1: 'rgba(42,48,60,0.3)',
        darkgray: '#232222',
        gray: '#b6b6b6',
        aqua: '#0edae9',
        pink: '#EE5390',
        magenta: '#E032E6',
      },
      maxWidth: {
        mobile: '480px',
      },
      right: {
        320: '320px',
      },
      spacing: {
        '10.5px': '10.5px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover'],
      margin: ['responsive', 'hover', 'first'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
};
