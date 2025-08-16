// minimal.js (CJS)
const js = require('@eslint/js');
const tseslint = require('typescript-eslint'); // <-- use meta package
const globals = require('globals');
const prettier = require('eslint-config-prettier');

const ignores = { ignores: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**', '*.d.ts'] };

module.exports = [
  ignores,
  js.configs.recommended,
  ...tseslint.configs.recommended, // non type-aware (fast)
  {
    languageOptions: {
      parser: tseslint.parser,         // <-- parser comes from meta package
      sourceType: 'module',
      globals: { ...globals.node }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn'
    }
  },
  prettier
];
