import type { Linter } from 'eslint';

/**
 * Enhanced ESLint configuration for CodeIQLabs projects
 * Provides additional rules for comprehensive API and backend projects
 */
export const enhancedConfig: Linter.FlatConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    // Additional rules for standard projects
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    'no-console': 'warn',
  },
};
