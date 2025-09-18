import { mjs } from '@alexey-koran/prettier-config';

/** @type {import('prettier').Config} */

export default {
  ...mjs,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
};
