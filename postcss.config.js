module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-assets': {
      loadPaths: ['**'],
    },
  },
};
