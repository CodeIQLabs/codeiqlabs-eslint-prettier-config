import type { Linter } from 'eslint';
import minimal from './minimal.js';

let react: any, reactHooks: any;
try {
  react = require('eslint-plugin-react');
} catch {
  throw new Error("Install eslint-plugin-react to use '@codeiqlabs/eslint-config/react'");
}
try {
  reactHooks = require('eslint-plugin-react-hooks');
} catch {
  throw new Error("Install eslint-plugin-react-hooks to use '@codeiqlabs/eslint-config/react'");
}

const reactCfg: Linter.FlatConfig[] = [
  ...minimal,
  {
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: { 'react/react-in-jsx-scope': 'off', 'react/prop-types': 'off' },
  },
  {
    plugins: { 'react-hooks': reactHooks },
    rules: { 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'warn' },
  },
];

export default reactCfg;
