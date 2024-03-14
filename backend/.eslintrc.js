module.exports = {
  env: {
      es2016: true,
      node: true,
      jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'es2016',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
      '@typescript-eslint/no-var-requires': 'off',
  },
};