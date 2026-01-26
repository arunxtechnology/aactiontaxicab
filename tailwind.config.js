/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'taxi-yellow': '#FACC15',
        'deep-navy': '#1E3A8A',
        'sky-blue': '#38BDF8',
        'soft-gray': '#F8FAFC',
        'dark-slate': '#1F2937',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
