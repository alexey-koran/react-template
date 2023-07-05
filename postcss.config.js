module.exports = {
  plugins: {
    'postcss-import': {},
    stylelint: {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      // Note that if you are using postcss-preset-env in your project,
      // you should make sure to disable nesting and let tailwindcss/nesting handle it for you instead
      // https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
      features: { 'nesting-rules': false },
    },
    'postcss-assets': {
      loadPaths: ['**'],
    },
  },
};
