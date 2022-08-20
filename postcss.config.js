/* eslint-disable global-require */
module.exports = {
  plugins: [
    'autoprefixer',
    'tailwindcss/nesting',
    require('tailwindcss'),
    require('postcss-preset-env'),
  ],
};
