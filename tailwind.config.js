/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': {
        light: '#F07D1F',
        DEFAULT: '#EF6C00',
        dark: '#E65100'
      },
      'purple': '#822E9A',
    },
    extend: {
      colors: {
        primary: 'rgba(240, 125, 31)',
        secondary: 'rgba(130, 46, 154)',
        'dark': {
          light: '#454545',
          DEFAULT: '#232323',
          dark: '#000000'
        },
        'coral': '#EEDFDF'
      }
    },
  },
  plugins: [],
}

