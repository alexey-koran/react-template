import type { Config } from 'tailwindcss';

const tailwindCssConfig = {
  content: {
    relative: true,
    files: ['./src/**/*.{js,cjs,mjs,jsx,cjsx,mjsx,ts,cts,mts,tsx,ctsx,mtsx}'],
  },
  plugins: [],
} satisfies Config;

export default tailwindCssConfig;
