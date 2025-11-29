const assert = require('node:assert/strict');
const path = require('node:path');

// Only run if @nx/eslint-plugin is available
let hasNx = false;
try {
  require.resolve('@nx/eslint-plugin');
  hasNx = true;
} catch {
  console.log('Skipping Nx React config test: @nx/eslint-plugin not installed');
}

if (hasNx) {
  const reactNx = require(path.join(__dirname, '..', 'dist', 'cjs', 'react-nx.js'));
  assert.ok(Array.isArray(reactNx) && reactNx.length > 0, 'react-nx FlatConfig[]');
  console.log('? Nx React config smoke test passed');
}
