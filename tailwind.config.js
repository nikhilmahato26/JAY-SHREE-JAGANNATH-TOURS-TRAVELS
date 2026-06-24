/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#E8973A',
          light: '#F2B45E',
          dark: '#C8741A',
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#E9C56B',
          dark: '#B8862A',
        },
        navy: {
          DEFAULT: '#0F1B2D',
          light: '#1C2D44',
          soft: '#28384F',
        },
        cream: '#FBF6EC',
        sand: '#F4E9D6',
      },
      fontFamily: {
        display: ['Marcellus', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(15,27,45,0.25)',
        glass: '0 8px 32px rgba(15,27,45,0.12)',
        glow: '0 14px 34px -10px rgba(200,116,26,0.55)',
      },
      backgroundImage: {
        'saffron-gold': 'linear-gradient(135deg, #E8973A 0%, #D9A441 100%)',
        'navy-glow': 'radial-gradient(ellipse at top, #1C2D44 0%, #0F1B2D 70%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
