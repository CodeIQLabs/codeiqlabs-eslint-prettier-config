// Test that pre-commit configurations can be loaded
const {
  lintStagedConfig,
  lintStagedMinimalConfig,
  lintStagedReactConfig,
  huskyPreCommitScript,
  preCommitScripts,
} = require('../dist/cjs/pre-commit-config.js');

console.log('Testing pre-commit configuration loading...');

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

// Test that script content is a string
if (typeof huskyPreCommitScript !== 'string') {
  throw new Error('huskyPreCommitScript should be a string');
}

// Test that scripts object exists
if (typeof preCommitScripts !== 'object' || preCommitScripts === null) {
  throw new Error('preCommitScripts should be an object');
}

// Test that configurations have expected properties
if (!lintStagedConfig['*.{ts,tsx,js,jsx,mjs,cjs}']) {
  throw new Error('lintStagedConfig should have TypeScript/JavaScript file patterns');
}

if (!lintStagedMinimalConfig['*.{ts,js,mjs,cjs}']) {
  throw new Error('lintStagedMinimalConfig should have TypeScript/JavaScript file patterns');
}

if (!lintStagedReactConfig['*.{ts,tsx,js,jsx,mjs,cjs}']) {
  throw new Error('lintStagedReactConfig should have TypeScript/JavaScript file patterns');
}

// Test that husky script contains expected content
if (!huskyPreCommitScript.includes('npx lint-staged')) {
  throw new Error('huskyPreCommitScript should contain lint-staged command');
}

// Test that scripts object has expected properties
if (!preCommitScripts.prepare || !preCommitScripts['pre-commit:setup']) {
  throw new Error('preCommitScripts should have prepare and pre-commit:setup scripts');
}

console.log('✅ Pre-commit configuration smoke test passed');
