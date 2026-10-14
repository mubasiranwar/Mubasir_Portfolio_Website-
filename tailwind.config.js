/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0F1E',
        surface: {
          DEFAULT: '#111827',
          elevated: '#151D2E',
        },
        'primary-text': '#F3F4F6',
        'secondary-text': '#9CA3AF',
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#0ea5e9',
        },
        'border-color': '#1E293B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
