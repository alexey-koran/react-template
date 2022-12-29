const baseRules = {
  'prettier/prettier': 'error',
  'import/no-duplicates': ['error', { considerQueryString: true }],
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
    },
  ],
  'arrow-parens': ['error', 'as-needed'],
  camelcase: 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'eol-last': 'error',
  'id-blacklist': [
    'error',
    'any',
    'Number',
    'number',
    'String',
    'string',
    'Boolean',
    'boolean',
    'Undefined',
  ],
  'id-match': 'error',
  'import/order': [
    'error',
    {
      groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'object', 'type', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: '@/**/*.pcss',
          group: 'index',
        },
        {
          pattern: '@/uikit/**',
          group: 'sibling',
        },
        {
          pattern: '@/**',
          group: 'internal',
        },
        {
          pattern: './**',
          group: 'parent',
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
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
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
  'space-before-function-paren': ['error', 'always'],
  'spaced-comment': [
    'error',
    'always',
    {
      markers: ['/'],
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

const baseConfigs = [
  'airbnb',
  'airbnb/hooks',
  'eslint:recommended',
  'plugin:import/recommended',
  'plugin:react/recommended',
];

const typescriptConfigs = [
  'airbnb',
  'airbnb/hooks',
  'airbnb-typescript',
  'eslint:recommended',
  'plugin:import/recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
];

const basePlugins = ['react', 'react-hooks', 'jsx-a11y', 'import'];
const typescriptPlugins = ['@typescript-eslint'];

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [...baseConfigs, 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [...basePlugins, 'prettier'],
  settings: {
    'import/no-unresolved': 'error',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
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
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...baseRules,
  },
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      extends: [...typescriptConfigs, 'prettier'],
      plugins: [...typescriptPlugins, ...basePlugins, 'prettier'],
      rules: {
        ...baseRules,
        ...typescriptRules,
      },
    },
  ],
};
