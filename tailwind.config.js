/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 -6px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -3px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

