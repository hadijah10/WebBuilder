module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier
    'prettier',                     // Disables ESLint rules that conflict with Prettier
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error', // Fail on formatting issues
    // Warn on unused variables
     'no-console': 'warn',
      // Enforce semicolons
    'semi': ['error', 'always'],
    //Enforce the use of strict equal to
      eqeqeq: ['error', 'always'],
       //Warn on unused variables.
      '@typescript-eslint/no-unused-vars': 'warn',
      // Error on use of undefined variables
      '@typescript-eslint/no-undef': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
  },
};
