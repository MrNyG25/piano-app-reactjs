/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-red-500',
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

