/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(67, 189, 173, 0.7)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(67, 189, 173, 0)' },
        },
      },
      animation: {
        pulseGreen: 'pulseGreen 2s infinite',
      },
    },
  },
  plugins: [],
}

