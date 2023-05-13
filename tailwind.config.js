/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        intro:"hsl(217, 28%, 15%)",
        main:"hsl(218, 28%, 13%)",
        footer:"hsl(216, 53%, 9%)",
        testimonials:"hsl(219, 30%, 18%)",
        icyan:"hsl(176, 68%, 64%)",
        iblue:"hsl(198, 60%, 50%)",
        ered:"hsl(0, 100%, 63%)",
        nwhite:"hsl(0, 0%, 70%)",

      },
      fontFamily:{
        raleway:["Raleway" ,"sans-serif" ],
        openSans:["Open Sans" ,"sans-serif" ],
      },
    },

    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

