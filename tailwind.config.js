/** @type {import('tailwindcss').Config} */

const tailwindCssConfig = {
  content: {
    relative: true,
    files: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      screens: {
        xs: { max: '480px' },
        sm: { max: '576px' },
        md: { max: '768px' },
        lg: { max: '992px' },
        xl: { max: '1200px' },
        '2xl': { max: '1336px' },
        '3xl': { max: '1576px' },
      },
    },
  },
  plugins: [],
};

export default tailwindCssConfig;
