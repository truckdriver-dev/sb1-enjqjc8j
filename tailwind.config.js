/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crypto: {
          red: {
            50: '#FFF5F5',
            100: '#FFE3E3',
            200: '#FFC9C9',
            300: '#FFA7A7',
            400: '#FF8787',
            500: '#FF6B6B',  // Base red
            600: '#FA5252',
            700: '#F03E3E',
            800: '#E03131',
            900: '#C92A2A',
          },
          accent: {
            blue: '#3B82F6',
            purple: '#8B5CF6',
            green: '#10B981',
          },
          dark: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
          },
          light: {
            100: '#F8FAFC',
            200: '#F1F5F9',
            300: '#E2E8F0',
            400: '#CBD5E1',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};