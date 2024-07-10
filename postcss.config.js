import postcssAssets from 'postcss-assets';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
// import stylelint from 'stylelint';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';

export default () => {
  return {
    plugins: [
      postcssImport(),
      // stylelint(), // TODO: temporary disabled
      tailwindcssNesting(),
      tailwindcss(),
      postcssPresetEnv({
        // Note that if you are using postcss-preset-env in your project,
        // you should make sure to disable nesting and let tailwindcss/nesting handle it for you instead
        // https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
        features: { 'nesting-rules': false },
      }),
      postcssAssets({
        loadPaths: ['**'],
      }),
    ],
  };
};
