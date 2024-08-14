/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

export const importRules = {
  'import/named': 0,
  'import/default': 0,
  'import/namespace': 0,
  'import/prefer-default-export': 0,
  'import/no-named-as-default-member': 0,

  'import/no-cycle': 2,
  'import/no-namespace': 2,
  'import/no-unresolved': 2, // eslint-import-resolver-typescript
  'import/no-empty-named-blocks': 2,
  'import/no-useless-path-segments': 2,

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
