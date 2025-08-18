import type { Linter } from 'eslint';
import minimal from './minimal.js';
import { reactPluginConfig, reactHooksConfig } from './configs/react.js';

/**
 * React ESLint configuration for CodeIQLabs projects
 * Extends minimal configuration with React-specific rules
 * Requires optional peer dependencies: eslint-plugin-react and eslint-plugin-react-hooks
 */
const reactCfg: Linter.FlatConfig[] = [...minimal, reactPluginConfig, reactHooksConfig];

export default reactCfg;
