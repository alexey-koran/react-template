/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

export const reactRules = {
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
