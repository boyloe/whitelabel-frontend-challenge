module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'hero': '#f4f1ed'
    }),
    extend: {
      fontFamily: {
        "Archivo": ['Archivo', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-italic": ['Archivo-Italic', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-md": ['Archivo-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-md-italic": ['Archivo-Medium-Italic', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-semibold": ['Archivo-Semibold', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-semibold-italic": ['Archivo-Semibold-Italic', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-bold": ['Archivo-Bold', 'Helvetica', 'Arial', 'sans-serif'],
        "Archivo-bold-italic": ['Archivo-Bold-Italic', 'Helvetica', 'Arial', 'sans-serif'],
      }, 
      textColor: {
        'splash':'#FFFFFF'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
