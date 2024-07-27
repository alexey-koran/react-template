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

const allJsExtensions = 'js,cjs,mjs,jsx,cjsx,mjsx';
const allTsExtensions = 'ts,cts,mts,tsx,ctsx,mtsx';
const allExtensions = [
  '.js',
  '.cjs',
  '.mjs',
  '.jsx',
  '.cjsx',
  '.mjsx',
  '.ts',
  '.cts',
  '.mts',
  '.tsx',
  '.ctsx',
  '.mtsx',
];

const supportedJsFileTypes = `**/*.{${allJsExtensions}}`;
const supportedTsFileTypes = `**/*.{${allTsExtensions}}`;
const supportedFileTypes = `**/*.{${allJsExtensions},${allTsExtensions}}`;

const getTsNamingConventionRule = ({ isTsx }) => ({
  '@typescript-eslint/naming-convention': [
    2,
    {
      selector: 'default',
      format: ['strictCamelCase', ...(isTsx ? ['StrictPascalCase'] : [])],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'import',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'variable',
      format: ['strictCamelCase', 'UPPER_CASE', ...(isTsx ? ['StrictPascalCase'] : [])],
      modifiers: ['const'],
      types: ['boolean', 'string', 'number'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'has', 'should', 'can'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    {
      selector: 'objectLiteralProperty',
      format: null,
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'parameter',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
  ],
});

/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

/*
  I forbid you to code :)
*/

const messages = {
  NO_ACCESS_MODIFIER: 'There is no need to limit developer access to properties.',
};

const baseRules = {
  'no-await-in-loop': 0,

  // eslint rules that not disabled by default via any config
  // use typescript-eslint version
  'no-shadow': 0,
  'no-return-await': 0, // @typescript-eslint/return-await
  'no-use-before-define': 0,
  'no-unused-expressions': 0,
  'padding-line-between-statements': 0,

  'prettier/prettier': 2, // eslint-plugin-prettier

  radix: 2,
  curly: 2,
  eqeqeq: 2,
  'default-case': 2,
  'default-case-last': 2,
  'object-shorthand': 2,
  'require-atomic-updates': 2,

  complexity: [2, 13],
  'max-depth': [2, 4],
  'max-nested-callbacks': [2, 5],

  'id-match': 2,
  'id-denylist': 2,

  'no-void': ['error', { allowAsStatement: true }],
  'no-eval': 2,
  'no-alert': 2,
  'no-proto': 2,
  'no-labels': 2,
  'no-plusplus': 2,
  'no-lonely-if': 2,
  'no-multi-str': 2,
  'no-extra-bind': 2,
  'no-lone-blocks': 2,
  'no-self-compare': 2,
  'no-useless-call': 2,
  'no-useless-assignment': 2,
  'no-multi-assign': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 2,
  'no-extend-native': 2,
  'no-nested-ternary': 2,
  'no-unreachable-loop': 2,
  'no-negated-condition': 2,
  'no-implicit-coercion': 2,
  'no-constructor-return': 2,
  'no-object-constructor': 2,
  'no-promise-executor-return': 2,
  'no-new-native-nonconstructor': 2,
  'no-unmodified-loop-condition': 2,
  'no-constant-binary-expression': 2,

  'prefer-template': 2,
  'prefer-object-spread': 2,
  'prefer-object-has-own': 2,
  'prefer-numeric-literals': 2,
  'prefer-exponentiation-operator': 2,

  'no-return-assign': [2, 'always'],

  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    },
  ],
  'no-console': [
    2,
    {
      allow: ['warn', 'error', 'debug'],
    },
  ],
  'no-sequences': [
    2,
    {
      allowInParentheses: false,
    },
  ],
  'no-else-return': [
    2,
    {
      allowElseIf: false,
    },
  ],
  'no-unneeded-ternary': [
    2,
    {
      defaultAssignment: false,
    },
  ],
  'no-duplicate-imports': [
    2,
    {
      includeExports: true,
    },
  ],
  'no-restricted-syntax': [
    2,
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries}, and iterate over the resulting array.',
    },
    {
      selector: "Identifier[name='Reflect']",
      message:
        'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development',
    },
    {
      selector: "BinaryExpression[operator='in']",
      message: 'Prefer Object.hasOwn().',
    },
    {
      selector: "PropertyDefinition[accessibility='public']",
      message: messages.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='protected']",
      message: messages.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='private']",
      message: messages.NO_ACCESS_MODIFIER,
    },
    {
      selector: "Identifier[name='PropTypes']",
      message: 'No PropTypes. Use Typescript instead.',
    },
    {
      selector: "Identifier[name='propTypes']",
      message: 'No PropTypes. Use Typescript instead.',
    },
    {
      selector: "Identifier[name='createContext']",
      message:
        'No React Context. Use component composition instead (https://beta.reactjs.org/learn/passing-data-deeply-with-context#before-you-use-context), or a "Global State Management" solution.',
    },
  ],

  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  'func-style': [
    2,
    'expression',
    {
      allowArrowFunctions: true,
    },
  ],
  'array-callback-return': [
    2,
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
  '@stylistic/js/spaced-comment': [
    2,
    'always',
    {
      line: {
        markers: ['/'],
        exceptions: ['-', '+', '*'],
      },
      block: {
        balanced: true,
      },
    },
  ],
  '@stylistic/js/newline-per-chained-call': 2,
};

const importRules = {
  'import/named': 0,
  'import/default': 0,
  'import/namespace': 0,
  'import/prefer-default-export': 0,
  'import/no-named-as-default-member': 0,

  'import/no-cycle': 2,
  'import/no-namespace': 2,
  'import/no-unresolved': 2, // eslint-import-resolver-typescript
  'import/no-empty-named-blocks': 2,

  'import/no-useless-path-segments': [
    2,
    {
      noUselessIndex: true,
    },
  ],
  'import/no-duplicates': [
    2,
    {
      'prefer-inline': true,
      considerQueryString: true,
    },
  ],
  'import/no-extraneous-dependencies': [
    2,
    {
      devDependencies: true,
    },
  ],
  'import/order': [
    2,
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
          pattern: '**eslint-plugin-react**',
          group: 'builtin',
          position: 'after',
        },
        {
          pattern: '**eslint-plugin-react**/**/*',
          group: 'builtin',
          position: 'after',
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
      distinctGroup: true,
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: false,
      },
    },
  ],
};

const typescriptRules = {
  // typescript-eslint/recommended rules
  '@typescript-eslint/no-explicit-any': 2, // default warn
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'never',
    },
  ],
  '@typescript-eslint/no-misused-promises': [
    2,
    {
      checksVoidReturn: {
        attributes: false,
      },
    },
  ],

  // typescript-eslint/strict rules, default warn
  '@typescript-eslint/prefer-includes': 2,
  '@typescript-eslint/no-base-to-string': 2,
  '@typescript-eslint/no-dynamic-delete': 2,
  '@typescript-eslint/unified-signatures': 2,
  '@typescript-eslint/ban-tslint-comment': 2,
  '@typescript-eslint/no-extraneous-class': 2,
  '@typescript-eslint/no-invalid-void-type': 2,
  '@typescript-eslint/prefer-function-type': 2,
  '@typescript-eslint/prefer-optional-chain': 2,
  '@typescript-eslint/no-unnecessary-condition': 2,
  '@typescript-eslint/consistent-type-definitions': 2,
  '@typescript-eslint/prefer-reduce-type-parameter': 2,
  '@typescript-eslint/consistent-indexed-object-style': 2,
  '@typescript-eslint/consistent-generic-constructors': 2,
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
  '@typescript-eslint/ban-ts-comment': 2,
  '@typescript-eslint/only-throw-error': 2,
  '@typescript-eslint/array-type': [
    2,
    {
      default: 'array-simple',
    },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    2,
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],
  '@typescript-eslint/prefer-nullish-coalescing': [
    2,
    {
      ignoreTernaryTests: false,
      ignoreConditionalTests: false,
      ignoreMixedLogicalExpressions: false,
    },
  ],

  // typescript-eslint/recommended-requiring-type-checking rules
  '@typescript-eslint/restrict-plus-operands': [
    2,
    {
      skipCompoundAssignments: true,
    },
  ],

  // rules not included in any configs
  '@typescript-eslint/no-redeclare': 2, // eslint version of rule disabled by eslint:recommended
  '@typescript-eslint/method-signature-style': 2,
  '@typescript-eslint/promise-function-async': 2,
  '@typescript-eslint/switch-exhaustiveness-check': 2,
  '@typescript-eslint/no-confusing-void-expression': 2,
  '@typescript-eslint/no-redundant-type-constituents': 2,
  '@typescript-eslint/explicit-module-boundary-types': 2,
  '@typescript-eslint/consistent-type-imports': [
    2,
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    2,
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    2,
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
    },
  ],
  '@typescript-eslint/require-array-sort-compare': [
    2,
    {
      ignoreStringArrays: true,
    },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    2,
    {
      allowExpressions: true,
    },
  ],

  // typescript-eslint version of eslint rules
  // rules not included in any configs
  '@typescript-eslint/no-shadow': [
    2,
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],
  '@typescript-eslint/return-await': [2, 'in-try-catch'], // eslint/no-return-await
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      ignoreTypeReferences: true,
    },
  ],
  '@typescript-eslint/no-unused-expressions': [
    2,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@stylistic/ts/padding-line-between-statements': [
    2,
    {
      blankLine: 'always',
      prev: [
        'const',
        'let',
        'case',
        'default',
        'block',
        'block-like',
        'multiline-block-like',
        'interface',
        'type',
      ],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let'],
      next: ['const', 'let'],
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type'],
    },
  ],
};

const reactRules = {
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/jsx-uses-react': 0,
  'react/react-in-jsx-scope': 0,
  'react/require-default-props': 0,
  'react/jsx-props-no-spreading': 0,

  'react/jsx-fragments': 2,
  'react/no-array-index-key': 2,
  'react-hooks/rules-of-hooks': 2,
  'react-hooks/exhaustive-deps': 2,

  'react/jsx-boolean-value': [2, 'always'],

  'react/hook-use-state': [
    2,
    {
      allowDestructuredState: true,
    },
  ],
  'react/jsx-no-duplicate-props': [
    2,
    {
      ignoreCase: true,
    },
  ],
  'react/no-multi-comp': [
    2,
    {
      ignoreStateless: true,
    },
  ],
  'react/destructuring-assignment': [
    2,
    'always',
    {
      ignoreClassFields: true,
      destructureInSignature: 'always',
    },
  ],
  'react/jsx-no-leaked-render': [
    2,
    {
      validStrategies: ['coerce', 'ternary'],
    },
  ],
  'react/no-unstable-nested-components': [
    2,
    {
      allowAsProps: false,
    },
  ],
  'react/jsx-no-useless-fragment': [
    2,
    {
      allowExpressions: true,
    },
  ],
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.jsx', '.cjsx', '.mjsx', '.tsx', '.ctsx', '.mtsx'],
      allow: 'as-needed',
      ignoreFilesWithoutCode: true,
    },
  ],
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
    },
  ],
  '@stylistic/jsx/jsx-pascal-case': 2,
  '@stylistic/jsx/jsx-sort-props': [
    2,
    {
      callbacksLast: true,
      ignoreCase: true,
      noSortAlphabetically: true,
      multiline: 'last',
      reservedFirst: false,
    },
  ],
};

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
      'import/extensions': allExtensions,
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
          extensions: allExtensions,
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
      ...baseRules,
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
      ...getTsNamingConventionRule({ isTsx: false }),
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
    ignores: ['build', 'node_modules'],
  },
];

export default config;
