module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'semi': [2, 'always'],
    'react/prop-types': [
      0,
      { 'ignore': 'ignore', 'customValidators': 'customValidator' }
    ],
    'import/order': ['error', {'groups': ['builtin', 'external', 'parent',
        'sibling', 'index']}],
  }
};