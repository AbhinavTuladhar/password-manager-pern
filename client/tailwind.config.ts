/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: 'clamp(16.25rem, 10.179rem + 30.357vw, 37.5rem)',
      },
      colors: {
        'primary-100': '#1d4ed8',
        'primary-200': '#4b5fdd',
        'primary-300': '#6972e2',
        'primary-400': '#8284e7',
        'primary-500': '#9898eb',
        'primary-600': '#aeacf0',
        'surface-100': '#171717',
        'surface-200': '#2c2c2c',
        'surface-300': '#434343',
        'surface-400': '#5b5b5b',
        'surface-500': '#747474',
        'surface-600': '#8e8e8e',
        'surface-mixed-100': '#212138',
        'surface-mixed-200': '#36364b',
        'surface-mixed-300': '#4d4c60',
        'surface-mixed-400': '#646375',
        'surface-mixed-500': '#7c7b8a',
        'surface-mixed-600': '#9594a1',
      },
    },
  },
  plugins: [],
}
