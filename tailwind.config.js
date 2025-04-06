/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3C88',
        secondary: '#4F46E5',
        dark: '#111827',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}


