import type { Linter } from 'eslint';

/**
 * React-specific ESLint configuration for CodeIQLabs projects
 * Requires optional peer dependencies: eslint-plugin-react and eslint-plugin-react-hooks
 */

import { createRequire } from 'module';

const requireFromCwd = createRequire(process.cwd() + '/package.json');

const loadPlugin = (name: string) => {
  const attempts = [
    () => requireFromCwd(name),
    () => require(name),
    () => require(require.resolve(name, { paths: [process.cwd()] })),
  ];

  for (const attempt of attempts) {
    try {
      return attempt();
    } catch {
      // try next resolution strategy
    }
  }

  throw new Error(`Install ${name} to use React configuration: npm install -D ${name}`);
};

const react = loadPlugin('eslint-plugin-react');
const reactHooks = loadPlugin('eslint-plugin-react-hooks');

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
