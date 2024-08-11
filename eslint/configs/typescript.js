/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

export const typescriptRules = {
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

export const getTsNamingConventionRule = ({ isTsx = false } = {}) => ({
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
