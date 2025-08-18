import type { Linter } from 'eslint';
import * as parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

/**
 * TypeScript-specific ESLint configuration for CodeIQLabs projects
 * Provides TypeScript parsing and linting rules
 */
export const typescriptConfig: Linter.FlatConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin as unknown as Linter.Plugin,
  },
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',

    // Disable base rules that are covered by TypeScript equivalents
    'no-unused-vars': 'off',
  },
};
