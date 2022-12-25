module.exports = {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          removeViewBox: false,
          mergePaths: false,
        },
      },
    },
  ],
};
