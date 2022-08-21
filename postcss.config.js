module.exports = {
  plugins: {
    autoprefixer: {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-assets': {
      loadPaths: ['**'],
    },
  },
};
