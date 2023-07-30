/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        purple: 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        'off-white': 'hsl(0, 0%, 94%)',
        'light-grey': 'hsl(0, 0%, 86%)',
        'smoke-grey': 'hsl(0, 1%, 44%)',
        'off-black': 'hsl(0, 0%, 8%)'
      },
    },
  },
  plugins: [],
}
