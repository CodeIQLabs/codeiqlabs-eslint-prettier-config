import type { Linter } from 'eslint';
import { baseConfig } from './configs/base.js';
import { typescriptConfig } from './configs/typescript.js';
import { prettierConfig } from './configs/prettier.js';
import { ignores } from './ignores.js';

/**
 * Minimal ESLint configuration for CodeIQLabs projects
 * Includes base JavaScript/TypeScript rules and Prettier integration
 * No React dependencies - suitable for CDK, API, and utility projects
 */
const minimal: Linter.FlatConfig[] = [
  { ignores: [...ignores] },
  baseConfig,
  typescriptConfig,
  prettierConfig,
];

export default minimal;
