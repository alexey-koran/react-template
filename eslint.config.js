const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');
const pluginImport = require('eslint-plugin-import');
const reactAccessibility = require('eslint-plugin-jsx-a11y');
const prettierPlugin = require('eslint-plugin-prettier');
const globals = require('globals');

const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

const allJsExtensions = 'js,mjs,cjs,jsx,mjsx';
const allTsExtensions = 'ts,mts,cts,tsx,mtsx';
const supportedTsFileTypes = `**/*.{${allTsExtensions}}`;
const supportedFileTypes = `**/*.{${allJsExtensions},${allTsExtensions}}`;

const baseRules = {
  'prettier/prettier': 'error',
  'arrow-parens': ['error', 'as-needed'],
  camelcase: 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'eol-last': 'error',
  'id-denylist': 'error',
  'id-match': 'error',
  'max-len': [
    'error',
    {
      code: 100,
      ignorePattern: '\\s*<',
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    },
  ],
  'jsx-quotes': ['error', 'prefer-single'],
  'dot-notation': 'off',
  'no-console': 'error',
  'no-alert': 'error',
  'no-var': 'error',
  'no-duplicate-imports': [
    'error',
    {
      includeExports: true,
    },
  ],
  'no-multiple-empty-lines': [
    2,
    {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    },
  ],
  'no-await-in-loop': 'off',
  'no-trailing-spaces': [
    'error',
    {
      ignoreComments: true,
    },
  ],
  'no-return-await': 'error',
  'object-curly-spacing': [2, 'always'],
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      array: false,
      object: true,
    },
  ],
  radix: 'error',
  'space-before-function-paren': ['error', 'always'],
  'spaced-comment': [
    'error',
    'always',
    {
      markers: ['/'],
    },
  ],
};

const importRules = {
  'import/no-unresolved': 'error', // eslint-import-resolver-typescript
  'import/no-duplicates': ['error', { considerQueryString: true }],
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
        'unknown',
      ],
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: '**react**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '@**/**react**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'webpack',
          group: 'builtin',
          position: 'after',
        },
        {
          pattern: '**webpack**',
          group: 'builtin',
          position: 'after',
        },
        {
          pattern: '@**/**webpack**',
          group: 'builtin',
          position: 'after',
        },
        {
          pattern: '@/components/**/*',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '@/uikit/**/*',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '@/assets/**/*',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: './**/*.pcss',
          group: 'sibling',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
    },
  ],
};

const typescriptRules = {
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unused-expressions': ['error'],
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true,
    },
  ],
  '@typescript-eslint/semi': ['error', 'always'],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
  ],
  '@typescript-eslint/dot-notation': 'off',
};

const reactRules = {
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react/jsx-no-useless-fragment': [
    2,
    {
      allowExpressions: true,
    },
  ],
  'react/jsx-filename-extension': [
    1,
    {
      extensions: ['.ts', '.tsx'],
    },
  ],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-props-no-spreading': 'off',
  'react/function-component-definition': 'off',
  'react/require-default-props': 'off',
};

module.exports = [
  'eslint:recommended',
  {
    files: [supportedFileTypes],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        JSX: 'readonly',
      },
      parser: typescriptParser, // @typescript-eslint/parser
      parserOptions: {
        // start plugin:@typescript-eslint/recommended-requiring-type-checking
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        // end plugin:@typescript-eslint/recommended-requiring-type-checking
        ecmaFeatures: {
          jsx: true, // eslint-plugin-react
        },
        jsxPragma: null, // @typescript/eslint-parser
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    settings: {
      // start eslint-import-resolver-typescript
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.mtsx'],
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
        },
      },
      // end eslint-import-resolver-typescript
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': reactAccessibility,
      import: pluginImport,
      prettier: prettierPlugin,
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
      ...reactAccessibility.configs.recommended.rules,
      ...prettierConfig.rules,
    },
  },
  {
    files: [supportedTsFileTypes],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs['eslint-recommended'].rules,
      ...typescript.configs.recommended.rules,
      ...typescript.configs['recommended-requiring-type-checking'].rules,
      ...typescriptRules,
    },
  },
];
