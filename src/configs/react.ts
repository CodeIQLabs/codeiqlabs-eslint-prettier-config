import type { Linter } from 'eslint';

/**
 * React-specific ESLint configuration for CodeIQLabs projects
 * Requires optional peer dependencies: eslint-plugin-react and eslint-plugin-react-hooks
 */

let react: any, reactHooks: any;

try {
  react = require('eslint-plugin-react');
} catch {
  throw new Error(
    'Install eslint-plugin-react to use React configuration: npm install -D eslint-plugin-react',
  );
}

try {
  reactHooks = require('eslint-plugin-react-hooks');
} catch {
  throw new Error(
    'Install eslint-plugin-react-hooks to use React configuration: npm install -D eslint-plugin-react-hooks',
  );
}

/**
 * React plugin configuration
 */
export const reactPluginConfig: Linter.FlatConfig = {
  files: ['**/*.tsx', '**/*.jsx'],
  plugins: {
    react: react,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // We use TypeScript for prop validation
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/display-name': 'off',
  },
};

/**
 * React Hooks plugin configuration
 */
export const reactHooksConfig: Linter.FlatConfig = {
  files: ['**/*.tsx', '**/*.jsx'],
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
