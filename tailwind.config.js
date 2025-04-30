// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e6f1ff',
            100: '#cce3ff',
            200: '#99c7ff',
            300: '#66abff',
            400: '#338fff',
            500: '#0073e6',
            600: '#005cb8',
            700: '#00458a',
            800: '#002e5c',
            900: '#00172e',
          },
        },
      },
    },
    plugins: [],
  }