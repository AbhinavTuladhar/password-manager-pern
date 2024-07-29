/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#2563eb',
        'primary-200': '#5173ee',
        'primary-300': '#6e83f1',
        'primary-400': '#8693f3',
        'primary-500': '#9da4f6',
        'primary-600': '#b1b6f8',
        'surface-100': '#1f2937',
        'surface-200': '#343d4a',
        'surface-300': '#4b535f',
        'surface-400': '#626974',
        'surface-500': '#7b808a',
        'surface-600': '#9498a0',
        'surface-mixed-100': '#2d458c',
        'surface-mixed-200': '#485799',
        'surface-mixed-300': '#5f6aa5',
        'surface-mixed-400': '#767eb2',
        'surface-mixed-500': '#8d92bf',
        'surface-mixed-600': '#a3a7cb',
      },
    },
  },
  plugins: [],
}
