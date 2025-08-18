import type { Linter } from 'eslint';
import prettier from 'eslint-config-prettier';

/**
 * Prettier integration configuration for CodeIQLabs projects
 * Disables ESLint rules that conflict with Prettier formatting
 */
export const prettierConfig: Linter.FlatConfig = prettier as unknown as Linter.FlatConfig;
