module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xg: '1108px',
      xl: '1440px',
      xxl: '1500px',
    },
    extend: {
      colors: {
        blueColor: '#0087FF',
        lightBlueColor: '#FBFDFF',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
