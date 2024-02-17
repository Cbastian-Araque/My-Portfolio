/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      spacing: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
      },
      fontSize: {
        'small': '1.4rem',
        'normal': '2rem',
        'big': '3.5rem',
        'size10': '1rem',
        'size12': '1.2rem',
        'size14': '1.4rem',
        'size16': '1.6rem',
        'size18': '1.8rem',
        'size24': '2.4rem',
        'size30': '3rem',
        'size34': '3.4rem',
        'size38': '3.8rem',
        'size40': '4rem',
        'size42': '4.2rem',
        'size44': '4.4rem',
        'size60': '6rem',
      },
      dropShadow: {
        'white': '5px 5px 15px rgba(255, 255, 255, 0.42)',
      }
    },
    colors: {
      'transparent': 'transparent',
      'current': 'current-color',
      'white': '#fff',
      'black': '#000',
      'blue_soft': '#68D0E7',
      'green_soft': '#68E77C',
      'dark_blue': '#060D28',
      'dark_blue_opacity': '#060d2881',
    },
    fontFamily: {
      'poppins-bold': ['poppins-bold', 'Arial', 'sans-serif'],
      'poppins-medium': ['poppins-medium', 'Arial', 'sans-serif'],
      'poppins-regular': ['poppins-regular', 'Arial', 'sans-serif'],
      'raleway-bold': ['raleway-bold', 'Arial', 'sans-serif'],
      'raleway-semibold': ['raleway-semibold', 'Arial', 'sans-serif'],
      'raleway-light': ['raleway-light', 'Arial', 'sans-serif'],
    },
    screens: {
      movil: {'min': '320px', 'max': '767px'},
      tablet: {'min': '768px', 'max': '1023px'},
      sm: {'min': '1024px', 'max': '1279px'},
      md: {'min': '1280px', 'max': '1439px'},
      lg: {'min': '1440px', 'max': '1750px'},
    }
  },
  plugins: [],
}