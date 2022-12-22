module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-assets': {
      loadPaths: ['**'],
    },
  },
};
