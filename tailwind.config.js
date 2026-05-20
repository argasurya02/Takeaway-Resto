/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        sage: {
          DEFAULT: '#7C9A7E',
          light: '#9BB89D',
          dark: '#5F715D',
        },
        olive: '#5F715D',
        beige: {
          DEFAULT: '#E9DFC8',
          light: '#F8F6F2',
          sand: '#D8C3A5',
        },
        cream: '#F8F6F2',
        dark: {
          brown: '#2B2623',
          charcoal: '#1F1F1F',
        },
        gold: '#C8A96B',
        muted: {
          orange: '#D89B5C',
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #7C9A7E 0%, #E9DFC8 50%, #C8A96B 100%)',
        'gradient-hero': 'linear-gradient(160deg, #2B2623 0%, #3d3027 40%, #5F715D 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(124,154,126,0.1) 0%, rgba(233,223,200,0.2) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,169,107,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200,169,107,0.6)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
