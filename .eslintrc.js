module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-typescript', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'no-console': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/no-unresolved': 0
  }
};
