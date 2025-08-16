const minimal = require('./minimal');

let reactPlugin, reactHooksPlugin;
try { reactPlugin = require('eslint-plugin-react'); } catch {}
try { reactHooksPlugin = require('eslint-plugin-react-hooks'); } catch {}

module.exports = [
  ...minimal,
  reactPlugin ? {
    plugins: { react: reactPlugin },
    settings: { react: { version: 'detect' } },
    rules: { 'react/react-in-jsx-scope': 'off', 'react/prop-types': 'off' }
  } : {},
  reactHooksPlugin ? {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: { 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'warn' }
  } : {}
];
