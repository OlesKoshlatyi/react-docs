module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-max-props-per-line': [2, { maximum: 2 }],
    'max-len': ['warn', { code: 100 }],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-const': 'error',
    indent: ['warn', 2],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'always'],
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
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
};
