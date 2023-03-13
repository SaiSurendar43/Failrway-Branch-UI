/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"  
  ],
  theme: {
    inset: {
      '0': 0,
      // ...
     '7': '1.75rem',
      '10':'2.5rem',
      '9':'3rem',
      '34':'42rem',
      '33':'20rem',
      '35':'29rem',
      '26':'24rem',
       '32':'23rem',
       '31':'26rem',
       '25':'37rem',
       '37':'33rem',
       '36':'36rem',
     '1/5': '20%',
    },
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#80c33f',
      'secondary': 'white',
      'danger': '#2a3a51',
       'First': '#434548',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['san', 'Georgia'],
    },
   extend: {
      spacing:{
        '72':'18rem',
        '84':'21rem',
        '96': '24rem',
        '400':'99rem',
      }
    },
  },
  plugins: [],
}
