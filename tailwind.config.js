/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        assessme: {
          orange: '#E17335',
          'orange-hover': '#EC600F',
          'orange-dark': '#C55A1F',
          'orange-light': '#FDF2EA',
          'orange-border': '#F9D6C0',
          dark: '#111518',
          charcoal: '#1F2428',
          surface: '#292E34',
          gray: '#696767',
          lightgray: '#F4F5F6',
          border: '#ECECEC',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Cabin', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(17, 21, 24, 0.06), 0 2px 6px -1px rgba(17, 21, 24, 0.04)',
        'modal': '0 -10px 40px -5px rgba(17, 21, 24, 0.25)',
        'orange': '0 10px 25px -5px rgba(225, 115, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
