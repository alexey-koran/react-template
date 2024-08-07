/** @type {import('svgo').Config} */

export default {
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
          mergePaths: false,
        },
      },
    },
    'removeDeprecatedAttrs',
  ],
};
