/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '23.438rem',
      md: '48rem',
      lg: '64rem',
      xl: '90rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkorange': '#F16718',
      'lightorange': '#FF9B62',
      'darkblue': '#162542',
      'lightgray': '#7B8BAD',
      'verylightblue': '#E8EFF2',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Barlow', 'serif'],
    },
    fontSize: {
      h1: ['3.5rem', 1],
      h2: ['2rem', 1.125],
      h3: ['1.5rem', 1.167],
      p: ['1rem', 1.625],
    },
    extend: {},
  },
  plugins: [],
}

