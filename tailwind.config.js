/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // azul oscuro
        secondary: '#059669',  // verde
      },
    },
  },
  plugins: [],
};
