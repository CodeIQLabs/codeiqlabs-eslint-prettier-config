import type { Linter } from 'eslint';
import minimal from './minimal.js';
import { testingConfig } from './configs/testing.js';
import { enhancedConfig } from './configs/enhanced.js';

/**
 * Standard ESLint configuration for CodeIQLabs projects
 * Extends minimal configuration with additional rules for API and backend projects
 * Includes testing utilities and more comprehensive linting rules
 */
const standard: Linter.FlatConfig[] = [...minimal, testingConfig, enhancedConfig];

export default standard;
