import tailwindcss from '@tailwindcss/postcss';
import postcssAssets from 'postcss-assets';
import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'stylelint';

export default () => ({
  plugins: [
    stylelint(),
    tailwindcss(),
    postcssPresetEnv({
      features: { 'nesting-rules': false },
    }),
    postcssAssets({
      loadPaths: ['**'],
    }),
  ],
});
