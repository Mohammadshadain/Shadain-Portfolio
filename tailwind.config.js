/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'mars-red': 'rgb(var(--color-mars-red) / <alpha-value>)',
        'mars-orange': 'rgb(var(--color-mars-orange) / <alpha-value>)',
        'mars-purple': 'rgb(var(--color-mars-purple) / <alpha-value>)',
        'space-black': 'rgb(var(--color-space-black) / <alpha-value>)',
        'space-blue': 'rgb(var(--color-space-blue) / <alpha-value>)',
        'dust': 'rgb(var(--color-dust) / <alpha-value>)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};