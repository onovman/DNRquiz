/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "regular": "24px",
        "middle": "35px",
        "medium": "40px",
        "semibig": "50px",
        "big": "60px",
        "giant": "70px",
        "semiun": "100px",
        "unbelievable": "150px"
      },
      colors: {
        "light": "#FDFEFE",
        "blue": "#1B1B44",
        "spacegray": "#777777",
        "primary": "#49D5FF",
        "aqua": "#9DCAD6",
        "yellow": "#E1B849",
        "relief": "#edf3f5",
        "gray": "#DDDDDD",
        "lightgray": "#D2D2D2",
        "sable": "#1B1B44",
        "bad": "#edf3f5"
      },
      boxShadow: {
        "hide": "inset 0 0 0 10000vw rgba(0,0,0,.5)",
        "regular": "0px 4px 34px rgba(0, 27, 68, 0.16)"
      },
      fontFamily: {
        "opensans": ['Open Sans', 'Arial', 'sans-serif'],
        "roboto": ['Roboto', 'Arial', 'sans-serif'],

      },
      borderRadius: {
        "remed": "4px",
        "regular": '5px',
        "medium": '20px',
        "half": "50%"
      },
      screens: {
        "medium": { max: "780px" },
        "semedium": { max: "600px" },
        "regular": { max: "400px" },
        "small": { max: "320px" },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
