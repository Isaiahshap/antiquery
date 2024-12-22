/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': {
          DEFAULT: '#800020',
          dark: '#580016',
        },
        'antique-gold': '#CFB53B',
        'cream': '#F5F5DC',
        'rich-black': '#02111B',
        'mahogany': '#C04000',
      },
      fontFamily: {
        'vintage': ['Playfair Display', 'serif'],
        'serif': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}