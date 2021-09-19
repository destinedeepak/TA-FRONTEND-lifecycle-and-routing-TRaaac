module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: '#EEFCFF',
        secondary: '#57A0EF',
      }),
      color: {
        primary:"#57A0EF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
