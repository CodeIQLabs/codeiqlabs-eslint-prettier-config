import type { Linter } from 'eslint';
import js from '@eslint/js';
import globals from 'globals';

/**
 * Base ESLint configuration for all CodeIQLabs projects
 * Provides fundamental JavaScript/ES2024 rules and globals
 */
export const baseConfig: Linter.FlatConfig = {
  files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.node,
      ...globals.es2024,
      ...globals.browser,
    },
  },
  rules: {
    ...js.configs.recommended.rules,
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
  },
};
