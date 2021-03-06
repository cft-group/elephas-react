module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  plugins: [
    'jest',
    'import',
    'typescript-sort-keys',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'max-len': ['error', {
      'code': 140,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
    }],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'typescript-sort-keys/interface': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
