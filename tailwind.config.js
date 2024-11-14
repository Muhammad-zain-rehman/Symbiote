/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/client_pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors:{
        primary:"#1D1D1D",
        secondary:"#171717",
        tertiary:"#121212",
        accent:"#E4E4E4"
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
        '2xs': '500px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1537px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1800px',
        '4xl': '2500px',
      }
    },
  },
  plugins: [],
};
