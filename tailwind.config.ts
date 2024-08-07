import type { Config } from 'tailwindcss';

const tailwindCssConfig = {
  content: {
    relative: true,
    files: ['./src/**/*.{js,cjs,mjs,jsx,cjsx,mjsx,ts,cts,mts,tsx,ctsx,mtsx}'],
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
} satisfies Config;

export default tailwindCssConfig;
