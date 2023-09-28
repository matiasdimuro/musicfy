/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'secondary': 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'dark': {
          'light': 'var(--dark-light)',
          'DEFAULT': 'var(--dark)',
          'dark': '#000000'
        },
        'coral': 'var(--coral)',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

