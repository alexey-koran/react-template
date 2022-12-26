module.exports = {
  plugins: {
    'postcss-import': {},
    stylelint: {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'postcss-assets': {
      loadPaths: ['**'],
    },
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.ts', './src/**/*.tsx'],
      css: ['**/*/.pcss'],
    },
  },
};
