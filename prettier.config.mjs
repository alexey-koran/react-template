import { config } from '@alexey-koran/prettier-config';

/** @type {import('prettier').Config} */

export default {
  ...config,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
};
