/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemibold" : "Dana Demibold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaBold" : "Morabba Bold",
     },
     screens : {
      'l': '960px',
      '845' : '845px'
     },
     gridTemplateRows: {
      'layout' : '70px auto',
     },
     colors : {
      'blueSpace': {
        light: '#25D5E4',
        DEFAULT: '#303867',
        dark: '#191E3A',
        m : 'rgba(61, 71, 128, 0.65);'
      },
      'cornflowerBlue': {
        light: '#ABAFD1',
        purple: '#767BFA',
        dark: '#3D4780',
      },
      'magnenta' : '#E61E62'
     },
    },
  },
  plugins: [],
}

