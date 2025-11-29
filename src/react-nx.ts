import type { Linter } from 'eslint';
import { createRequire } from 'module';
import react from './react.js';

/**
 * React + Nx ESLint configuration for CodeIQLabs projects
 * Extends the React preset and layers Nx's flat configs plus module boundary enforcement.
 * Requires optional peer dependency: @nx/eslint-plugin
 */
const requireFromCwd = createRequire(process.cwd() + '/package.json');

const loadNx = () => {
  const attempts = [
    () => requireFromCwd('@nx/eslint-plugin'),
    () => require('@nx/eslint-plugin'),
    () => require(require.resolve('@nx/eslint-plugin', { paths: [process.cwd()] })),
  ];

  for (const attempt of attempts) {
    try {
      return attempt();
    } catch {
      // try next
    }
  }

  throw new Error(
    'Install @nx/eslint-plugin to use the Nx React configuration: npm install -D @nx/eslint-plugin',
  );
};

const nx = loadNx();

const nxIgnores = ['**/dist/**', '**/.nx/cache/**', '**/coverage/**'];

const nxModuleBoundaryRule = {
  '@nx/enforce-module-boundaries': [
    'error',
    {
      enforceBuildableLibDependency: true,
      allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
      depConstraints: [
        {
          sourceTag: '*',
          onlyDependOnLibsWithTags: ['*'],
        },
      ],
    },
  ],
} as const;

const reactNx: Linter.FlatConfig[] = [
  ...react,
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  { ignores: nxIgnores },
  { files: ['**/*.{ts,tsx,js,jsx}'], rules: nxModuleBoundaryRule },
];

export default reactNx;
