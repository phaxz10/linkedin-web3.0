module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat, sans-serif'],
      },
      colors: {
        blue: '#0A66C2',
        gray: '#666666',
        'light-blue': '#70B5F9',
        green: '#7FC15E',
        brown: '#915907',
        orange: '#E7A33E',
        red: '#F5987E',
        'white-smoke': '#F3F2EF',
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
}
