import {
  shareableConfig,
  supportedFileTypes,
  supportedExtensions,
} from '@alexey-koran/eslint-config';

const config = [
  ...shareableConfig,
  {
    files: [supportedFileTypes.all],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          defaultProject: './tsconfig.json',
        },
      },
    },
    settings: {
      'import/ignore': 'node_modules', // Temporary fix https://github.com/typescript-eslint/typescript-eslint/issues/9450
      'import/extensions': supportedExtensions.all,
      // start eslint-import-resolver-typescript
      'import/parsers': {
        '@typescript-eslint/parser': [...supportedExtensions.ts, ...supportedExtensions.tsx],
      },
      // eslint-import-resolver-webpack
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        webpack: {
          config: './webpack.config.ts',
        },
        node: {
          paths: ['src'],
          extensions: supportedExtensions.all,
        },
      },
      // end eslint-import-resolver-typescript
    },
  },
  {
    // The new config system no longer supports .eslintignore files
    // https://eslint.org/blog/2022/10/eslint-v8.25.0-released/#highlights
    ignores: ['build'],
  },
];

export default config;
