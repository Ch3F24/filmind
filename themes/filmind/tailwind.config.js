/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "layouts/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        xxl: "1.375rem",
        '4.5xl': "2.5rem",
        '26': "1.625rem;"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],

      },
      colors: {
        "las-palmas": "#BCF126",
        "cod-gray": "#1E1E1E",
        "alto": "#D9D9D9",
        "mine-shaft": "#3C3C3C",
      },
      margin: {
        '30': '7.5rem',
      },
      padding: {
        '22': '5.5rem'
      }
    },
  },
  plugins: [],
};