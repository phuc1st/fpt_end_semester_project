/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#338AE5',
          50: '#F0F8FF',
          100: '#D6ECFF',
          200: '#B8DCFF',
          300: '#93C5FD',
          400: '#6CB2FF',
          500: '#338AE5',
          600: '#1E6FBA',
          700: '#155A9E',
          800: '#0F4682',
          900: '#0A3566',
        },
        neutral: {
          DEFAULT: '#080808',
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
          950: '#080808',
        }
      },
      fontSize: {
        'display': ['60px', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '800' }],
        'h2': ['34px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'h6': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
      }
    },
  },
  plugins: [],
}