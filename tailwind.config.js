/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crypto: {
          yellow: {
            50: '#FFFDE7',
            100: '#FFF9C4',
            200: '#FFF59D',
            300: '#FFF176',
            400: '#FFEE58',
            500: '#FFEB3B',  // Base yellow
            600: '#FDD835',
            700: '#FBC02D',
            800: '#F9A825',
            900: '#F57F17',
          },
          accent: {
            blue: '#3B82F6',
            green: '#10B981',
            purple: '#8B5CF6',
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