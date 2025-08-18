import type { Linter } from 'eslint';

/**
 * Testing-specific ESLint configuration for CodeIQLabs projects
 * Provides relaxed rules for test files to allow common testing patterns
 */
export const testingConfig: Linter.FlatConfig = {
  files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
  rules: {
    // Allow console.log in test files
    'no-console': 'off',
    // Allow any in test files for mocking
    '@typescript-eslint/no-explicit-any': 'off',
    // Allow empty functions in test files for stubs
    '@typescript-eslint/no-empty-function': 'off',
    // Allow unused expressions in test files (for assertions)
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
