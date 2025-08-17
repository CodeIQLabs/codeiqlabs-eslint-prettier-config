// Pre-commit configuration templates for CodeIQLabs projects

// Define lint-staged configuration type
type LintStagedConfig = Record<string, string | string[]>;

/**
 * Standard lint-staged configuration for CodeIQLabs projects
 * Runs ESLint and Prettier on staged files before commit
 */
export const lintStagedConfig: LintStagedConfig = {
  // TypeScript and JavaScript files
  '*.{ts,tsx,js,jsx,mjs,cjs}': ['eslint --fix', 'prettier --write'],

  // JSON, YAML, and Markdown files
  '*.{json,yaml,yml,md}': ['prettier --write'],

  // Package.json files (special handling)
  'package.json': ['prettier --write'],
};

/**
 * Minimal lint-staged configuration for CDK projects
 * Focuses on TypeScript files and infrastructure code
 */
export const lintStagedMinimalConfig: LintStagedConfig = {
  '*.{ts,js,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,yaml,yml}': ['prettier --write'],
};

/**
 * Extended lint-staged configuration for React projects
 * Includes additional file types common in UI projects
 */
export const lintStagedReactConfig: LintStagedConfig = {
  '*.{ts,tsx,js,jsx,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,yaml,yml,md,css,scss,html}': ['prettier --write'],
  'package.json': ['prettier --write'],
};

/**
 * Husky pre-commit hook script content
 * This should be placed in .husky/pre-commit
 */
export const huskyPreCommitScript = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
`;

/**
 * Package.json scripts to add for pre-commit functionality
 */
export const preCommitScripts = {
  prepare: 'husky install',
  'pre-commit:setup': 'husky install && husky add .husky/pre-commit "npx lint-staged"',
  'pre-commit:test': 'lint-staged',
};
