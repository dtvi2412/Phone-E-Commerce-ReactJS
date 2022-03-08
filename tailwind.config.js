module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'fade-out': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in',
        'fade-out': 'fade-out 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
