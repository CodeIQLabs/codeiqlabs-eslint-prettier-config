// Test ESM imports for pre-commit configurations
import {
  lintStagedConfig,
  lintStagedMinimalConfig,
  lintStagedReactConfig,
} from '../dist/esm/pre-commit-config.js';

console.log('Testing ESM imports for pre-commit configurations...');

// Test that configurations are objects
if (typeof lintStagedConfig !== 'object' || lintStagedConfig === null) {
  throw new Error('lintStagedConfig should be an object');
}

if (typeof lintStagedMinimalConfig !== 'object' || lintStagedMinimalConfig === null) {
  throw new Error('lintStagedMinimalConfig should be an object');
}

if (typeof lintStagedReactConfig !== 'object' || lintStagedReactConfig === null) {
  throw new Error('lintStagedReactConfig should be an object');
}

// Test that configurations have expected properties
if (!lintStagedConfig['*.{ts,tsx,mjs,cjs}']) {
  throw new Error('lintStagedConfig should have TypeScript/JavaScript file patterns');
}

if (!lintStagedMinimalConfig['*.{ts,mjs,cjs}']) {
  throw new Error('lintStagedMinimalConfig should have TypeScript/JavaScript file patterns');
}

if (!lintStagedReactConfig['*.{ts,tsx,mjs,cjs}']) {
  throw new Error('lintStagedReactConfig should have TypeScript/JavaScript file patterns');
}

console.log('✅ ESM import test for pre-commit configurations passed');
