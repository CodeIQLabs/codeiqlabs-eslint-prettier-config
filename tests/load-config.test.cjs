const assert = require('node:assert/strict');
const path = require('node:path');

const root = require(path.join(__dirname, '..', 'dist', 'cjs', 'index.js'));
const minimal = root.default || root.minimal;
assert.ok(Array.isArray(minimal) && minimal.length > 0, 'minimal FlatConfig[]');

const first = minimal[0] || {};
assert.ok(Array.isArray(first.ignores), 'global ignores present');

// Only try react if plugin exists locally
let hasReact = false;
try {
  require.resolve('eslint-plugin-react');
  hasReact = true;
} catch {}
if (hasReact) {
  const reactCfg = require(path.join(__dirname, '..', 'dist', 'cjs', 'react.js'));
  assert.ok(Array.isArray(reactCfg) && reactCfg.length > 0, 'react FlatConfig[]');
}

console.log('✅ ESLint config smoke test passed');
