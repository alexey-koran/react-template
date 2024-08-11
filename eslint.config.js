import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import stylisticJS from '@stylistic/eslint-plugin-js';
import stylisticJSX from '@stylistic/eslint-plugin-jsx';
import stylisticTS from '@stylistic/eslint-plugin-ts';
// ESLint v9 compatibility utilities
import pluginImport from 'eslint-plugin-import';
import pluginImportConfig from 'eslint-plugin-import/config/recommended.js';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

import { importRules } from './eslint/configs/import.js';
import { javaScriptRules } from './eslint/configs/javascript.js';
import { reactRules } from './eslint/configs/react.js';
import { typescriptRules, getTsNamingConventionRule } from './eslint/configs/typescript.js';
import {
  supportedJsFileTypes,
  supportedTsFileTypes,
  supportedFileTypes,
  extensionsArr,
} from './eslint/index.js';

/*
  I forbid you to code :)
*/

const config = [
  {
    files: [supportedJsFileTypes],
    rules: eslint.configs.recommended.rules,
  },
  {
    files: [supportedFileTypes],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        JSX: 'readonly',
      },
      parser: typescriptEslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: ['./*.ts', './*.cts', './*.mts', './*.tsx', './*.ctsx', './*.mtsx'],
          defaultProject: './tsconfig.json',
        },
        ecmaFeatures: {
          jsx: true, // eslint-plugin-react
        },
        jsxPragma: null, // @typescript/eslint-parser
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      'import/ignore': 'node_modules', // Temporary fix https://github.com/typescript-eslint/typescript-eslint/issues/9450
      'import/extensions': extensionsArr,
      // start eslint-import-resolver-typescript
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx', '.ctsx', '.mtsx'],
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
          extensions: extensionsArr,
        },
      },
      // end eslint-import-resolver-typescript
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': reactAccessibility,
      // TODO: Remove after eslint-plugin-import update
      // fixupPluginRules wraps each rule in the given plugin using fixupRule()
      // and returns a new object that represents the plugin with the fixed-up rules
      import: fixupPluginRules(pluginImport),
      '@stylistic/js': stylisticJS,
      '@stylistic/ts': stylisticTS,
      '@stylistic/jsx': stylisticJSX,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactAccessibility.configs.recommended.rules,
      ...prettierConfig.rules,
      ...pluginImportConfig.rules,
      ...javaScriptRules,
      ...importRules,
      ...reactRules,
    },
  },
  {
    files: [supportedTsFileTypes],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    rules: {
      ...typescriptEslint.configs['strictTypeChecked'].rules,
      ...typescriptEslint.configs['stylisticTypeChecked'].rules,
      ...getTsNamingConventionRule(),
      ...typescriptRules,
    },
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    rules: {
      ...getTsNamingConventionRule({ isTsx: true }),
    },
  },
  {
    // The new config system no longer supports .eslintignore files
    // https://eslint.org/blog/2022/10/eslint-v8.25.0-released/#highlights
    ignores: ['build'],
  },
];

export default config;
