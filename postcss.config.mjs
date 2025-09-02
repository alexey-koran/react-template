import postcssAssets from 'postcss-assets';
import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'stylelint';

export default () => ({
  plugins: [
    stylelint(),
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
});
