# @codeiqlabs/eslint-prettier-config

Shared ESLint v9 flat configs, Prettier defaults, and pre-commit templates for JS/TS (ESM & CJS).
Dogfooded in this repo via `eslint.config.mjs`, `prettier.config.mjs`, and `lint-staged.config.mjs`.

[![GitHub package version](https://img.shields.io/github/package-json/v/CodeIQLabs/codeiqlabs-eslint-prettier-config?label=version)](https://github.com/CodeIQLabs/codeiqlabs-eslint-prettier-config/packages)
[![CI](https://github.com/CodeIQLabs/codeiqlabs-eslint-prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/CodeIQLabs/codeiqlabs-eslint-prettier-config/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue.svg)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node-18.18+-green.svg)](https://nodejs.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9+-purple.svg)](https://eslint.org/)

## What this package is (and isn’t)

- **Is:** ESLint v9 flat presets (Minimal, Standard, React), shared Prettier options, and Husky + lint-staged pre-commit templates that drop into JS/TS projects.
- **Is:** Built as dual ESM/CJS outputs with typed exports for broad toolchain support.
- **Is:** A way to standardize style rules and pre-commit ergonomics across CodeIQLabs repos.
- **Isn’t:** A kitchen-sink plugin pack—React rules are optional and only used when you opt in.

## Presets at a glance

- **Minimal** — Base JS/TS rules, Prettier integration, shared ignores (`src/minimal.ts`, `src/ignores.ts`). Use for CLIs, libraries, or services without testing relaxations.
- **Standard** — Minimal plus stricter TS/backend rules and test-file relaxations (`src/standard.ts`, `src/configs/testing.ts`, `src/configs/enhanced.ts`). Use for Node/TS apps with tests.
- **React** — Minimal plus React + React Hooks rules (`src/react.ts`, `src/configs/react.ts`). React plugins are optional peer deps; use for React frontends.
- **Prettier options** — Shared formatting defaults (`src/prettier-config.ts`).
- **Pre-commit templates** — Husky + lint-staged presets (`src/pre-commit-config.ts`).

## Quickstart

This project demonstrates **authentic dogfooding** by using its own exported configurations
throughout its codebase, proving the reliability and quality of the shared configuration.

- **ESLint**: Uses `@codeiqlabs/eslint-prettier-config/minimal` for its own linting
- **Prettier**: Uses `@codeiqlabs/eslint-prettier-config/prettier` for its own formatting
- **Pre-commit Hooks**: Uses `@codeiqlabs/eslint-prettier-config/pre-commit` for its own git hooks

Every commit to this repository automatically passes through the same linting and formatting checks
that consuming projects will use. This ensures the configurations work correctly in real-world usage
before being published to other CodeIQLabs projects.

This continuous validation ensures that:

- The shared configuration is battle-tested on its own codebase
- Breaking changes are caught before they affect consuming projects
- The configuration scales properly to TypeScript projects with multiple file types
- Other CodeIQLabs projects can confidently adopt these standards

### No .prettierignore File

**Intentionally, this package has no `.prettierignore` file.** This demonstrates that:

- All source code, including TypeScript files in `src/`, follows our formatting standards
- The Prettier configuration works correctly on real TypeScript codebases
- No exceptions or workarounds are needed when using our shared configuration
- Other projects can trust that following our patterns will result in consistently formatted code

### Quality Assurance

The entire codebase passes both linting and formatting checks:

```bash
npm run lint        # All files pass ESLint rules
npm run format:check # All files follow Prettier formatting
```

### How Dogfooding Validates Quality

By using its own configurations, this package ensures:

**Real-World Testing** - Every feature is tested on actual TypeScript/JavaScript code, not just
examples **Continuous Validation** - All commits automatically run through the same quality checks
that consuming projects use **Breaking Change Prevention** - Configuration changes that would break
existing projects are caught immediately **Publication Confidence** - Only configurations that
successfully lint and format this codebase are published **Feedback Loop** - Issues with
configurations are discovered and fixed during development of the package itself

When you see a new version of this package, you can be confident that:

- The ESLint rules successfully lint real TypeScript code without false positives
- The Prettier configuration formats code consistently without conflicts
- The pre-commit hooks work reliably in a real git repository
- All configurations are compatible with the latest versions of their dependencies

## Usage by Project Type (copy/paste setups)

### Minimal (CDK, Infrastructure, Utilities)

1. Install deps:

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
```

2. Create `eslint.config.mjs`:

```javascript
import minimal from '@codeiqlabs/eslint-prettier-config/minimal';
export default minimal;
```

3. Create `prettier.config.mjs`:

```javascript
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

4. Create `lint-staged.config.mjs`:

```javascript
import { lintStagedMinimalConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedMinimalConfig;
```

5. Add scripts to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

6. Init Husky hook:

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

### Standard (API, Backend Projects)

1. Install deps:

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
```

2. `eslint.config.mjs`:

```javascript
import standard from '@codeiqlabs/eslint-prettier-config/standard';
export default standard;
```

3. `prettier.config.mjs`:

```javascript
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

4. `lint-staged.config.mjs`:

```javascript
import { lintStagedConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedConfig;
```

5. Add scripts to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

6. Init Husky hook:

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

### React (UI Projects)

1. Install deps:

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-react eslint-plugin-react-hooks
```

2. `eslint.config.mjs`:

```javascript
import react from '@codeiqlabs/eslint-prettier-config/react';
export default react;
```

3. `prettier.config.mjs`:

```javascript
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

4. `lint-staged.config.mjs`:

```javascript
import { lintStagedReactConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedReactConfig;
```

5. Add scripts to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

6. Init Husky hook:

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

### Nx React (Nx Monorepos)

1. Install deps:

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-react eslint-plugin-react-hooks @nx/eslint-plugin
```

2. `eslint.config.mjs`:

```javascript
import reactNx from '@codeiqlabs/eslint-prettier-config/react-nx';
export default reactNx;
```

3. `prettier.config.mjs`:

```javascript
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

4. `lint-staged.config.mjs`:

```javascript
import { lintStagedReactConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedReactConfig;
```

5. Add scripts to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

6. Init Husky hook:

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

That's it—drop in the files, install deps, and `npx lint-staged` will run via Husky on commits.

### Legacy CommonJS Support

**For projects that require CommonJS:**

```javascript
// eslint.config.js
module.exports = require('@codeiqlabs/eslint-prettier-config').minimal;

// prettier.config.js
module.exports = require('@codeiqlabs/eslint-prettier-config/prettier');
```

**Tip:** Prefer `npx eslint .` instead of passing globs; our preset already ships a global ignores
block for `dist`, `build`, `.next`, `coverage`, etc.

## What's exported (dual ESM + CJS)

| Subpath                                         | ESM import                                             | CJS require                                                 |
| ----------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| `@codeiqlabs/eslint-prettier-config`            | `import cfg from '@codeiqlabs/eslint-prettier-config'` | `const cfg = require('@codeiqlabs/eslint-prettier-config')` |
| `@codeiqlabs/eslint-prettier-config/minimal`    | `import minimal from '@.../minimal'`                   | `const minimal = require('@.../minimal')`                   |
| `@codeiqlabs/eslint-prettier-config/react`      | `import react from '@.../react'`                       | `const react = require('@.../react')`                       |
| `@codeiqlabs/eslint-prettier-config/react-nx`   | `import reactNx from '@.../react-nx'`                  | `const reactNx = require('@.../react-nx')`                  |
| `@codeiqlabs/eslint-prettier-config/prettier`   | `import p from '@.../prettier'`                        | `const p = require('@.../prettier')`                        |
| `@codeiqlabs/eslint-prettier-config/ignores`    | `import {…} from '@.../ignores'`                       | `const {…} = require('@.../ignores')`                       |
| `@codeiqlabs/eslint-prettier-config/pre-commit` | `import {…} from '@.../pre-commit'`                    | `const {…} = require('@.../pre-commit')`                    |

Default export of root (`@codeiqlabs/eslint-prettier-config`) is `minimal` for smooth ESM
default-imports.

React preset is a subpath (`./react`) so the optional React plugins are not forced on non-React
repos.

## Versioning & Releases

We use Changesets with SemVer:

- **patch**: fixes/docs/build tweaks
- **minor**: new preset(s) or additive config
- **major**: breaking rule defaults or removed exports

Publishing targets GitHub Packages (`publishConfig.registry=https://npm.pkg.github.com`). Consumers
pulling from GH Packages must configure their `.npmrc` accordingly.

## Contributing & license

MIT licensed. See [LICENSE](LICENSE), [CONTRIBUTING.md](CONTRIBUTING.md), and [CHANGELOG.md](CHANGELOG.md).
Releases are automated with Changesets; CI runs format/lint/tests via GitHub Actions.
