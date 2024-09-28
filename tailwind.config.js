/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '200px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        'custom-green': '#0ACF83',
        'custom-purple': '#A259FF',
        'custom-orange': '#F24E1E',
        'custom-pink': '#FF7262',
        'custom-blue': '#1ABCFE',
      },
      boxShadow: {
        'custom': '0 0 8px 2px rgba(248, 223, 145, 1)', // x, y, blur, spread, color
      },

    },
  },
  plugins: [],
}

