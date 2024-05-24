module.exports = {

  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities', 'components', 'base'],
    content: [
    './resources/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './resources/js/*.js',

    './resources/views/layouts/app.blade.php',
    './resources/js/components/*.vue',
    './resources/js/views/*.vue',
    './resources/js/unauthenticate/*.vue',
    './resources/js/Actions/*.vue',
    './resources/js/views/**/*.vue',
    './resources/js/views/*.vue',
    './resources/js/views/common/*.vue',
    './resources/js/views/EE/*.vue',
    './resources/js/views/engineer/*.vue',
    './resources/js/views/feature/*.vue',
    './resources/js/views/grant/*.vue',
    './resources/js/views/localcouncil/*.vue',
    './resources/js/views/payment/*.vue',
    './resources/js/views/SDO/*.vue',
    './resources/js/views/user/*.vue',
    ],
  },

  // future: {
  //   purgeLayersByDefault: true,
  // },
  // purge: [
  //   './resources/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.jsx',
  //   './resources/js/components/*.vue',
  //   './resources/js/views/*.vue',
  //   './resources/js/unauthenticate/*.vue',
  //   './resources/js/Actions/*.vue',
  //   './resources/js/views/**/*.vue',

  // ],
  theme: {


    screens: {

      'ss': '200px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1580px',
      // => @media (min-width: 1280px) { ... }
     },

    extend: {

      colors: {
        puia: '#9cdbff',
        homeblue: '#104094',
        buttonpink: '#FF1A67',
        textblue: '#114092',
        maintext: '#434548',
        textblueform:'#456FAE',
        textgrayform: '#8A8383',
        bodygray: '#F6F6F6',
        successcyan: '#24D4BD',
        bgcontent: '#f6f6f6',
        tableheader: '#1f4590',
        tablehover: '#e6eaf3',
      },
      
      spacing:{

      '72': '18rem',
      '84': '21rem',

      '96': '24rem',
      }
    }
  },
  variants: {
    extend: {
      scale: ['focus-within'],
    }
  },


  plugins: [
    

  ]
}
