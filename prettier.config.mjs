import externalConfig from '@alexey-koran/prettier-config';

/** @type {import('prettier').Config} */

export default {
  ...externalConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
};
