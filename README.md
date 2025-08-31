# @codeiqlabs/eslint-prettier-config

**Centralized ESLint, Prettier, and Pre-commit Hook Configurations for CodeIQLabs Projects**

This package provides battle-tested, standardized code quality configurations that ensure consistent
formatting, linting, and pre-commit validation across all CodeIQLabs repositories. Published as a
dual module (ESM and CJS) with conditional exports for maximum compatibility.

## What This Package Provides

- **ESLint v9 Flat Configurations** - Modern linting rules for TypeScript, JavaScript, and React
  projects
- **Prettier Configuration** - Consistent code formatting with sensible defaults
- **Pre-commit Hook Templates** - Automated quality checks using Husky and lint-staged
- **Project-Specific Variants** - Tailored configurations for CDK, API, and React projects
- **Dual Module Support** - Works with both ESM (.mjs) and CommonJS (.js) projects

## Key Benefits

✅ **Consistency Across Projects** - All CodeIQLabs repositories use identical code quality
standards<br> ✅ **Zero Configuration** - Import and use immediately with sensible defaults<br> ✅
**Automated Quality Enforcement** - Pre-commit hooks prevent bad code from being committed<br> ✅
**Battle-Tested** - This package uses its own configurations (dogfooding) to ensure reliability<br>
✅ **Easy Updates** - Update linting rules across all projects by updating one package<br> ✅
**Developer Experience** - Reduces setup time and eliminates configuration drift<br>

## Dogfooding & Quality Assurance via Self-Validation

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

### ESLint Configuration Dogfooding

This repository uses its own exported ESLint configuration:

```javascript
// eslint.config.mjs - This project uses its own ESLint configuration
import minimal from '@codeiqlabs/eslint-prettier-config/minimal';
export default minimal;
```

### Prettier Configuration Dogfooding

This repository uses its own exported Prettier configuration:

```javascript
// prettier.config.mjs - This project uses its own Prettier configuration
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

### Pre-commit Hooks Configuration Dogfooding

This repository uses its own exported pre-commit hook configuration:

```javascript
// lint-staged.config.mjs - This project uses its own pre-commit configuration
import { lintStagedMinimalConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedMinimalConfig;
```

### No .prettierignore File

**Intentionally, this package has no `.prettierignore` file.** This demonstrates that:

- All source code, including TypeScript files in `src/`, follows our formatting standards
- The Prettier configuration works correctly on real TypeScript codebases
- No exceptions or workarounds are needed when using our shared configuration
- Other projects can trust that following our patterns will result in consistently formatted code

### Quality Assurance

The entire codebase passes both linting and formatting checks:

```bash
npm run lint        # ✅ All files pass ESLint rules
npm run format:check # ✅ All files follow Prettier formatting
```

### How Dogfooding Validates Quality

By using its own configurations, this package ensures:

🔍 **Real-World Testing** - Every feature is tested on actual TypeScript/JavaScript code, not just
examples<br> 🚀 **Continuous Validation** - All commits automatically run through the same quality
checks that consuming projects use<br> 🛡️ **Breaking Change Prevention** - Configuration changes
that would break existing projects are caught immediately<br> 📦 **Publication Confidence** - Only
configurations that successfully lint and format this codebase are published<br> 🔄 **Feedback
Loop** - Issues with configurations are discovered and fixed during development of the package
itself

When you see a new version of this package, you can be confident that:

- The ESLint rules successfully lint real TypeScript code without false positives
- The Prettier configuration formats code consistently without conflicts
- The pre-commit hooks work reliably in a real git repository
- All configurations are compatible with the latest versions of their dependencies

## Installation

### Quick Start

**For CDK/Infrastructure/Utilities projects:**

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript prettier
```

**For API/Backend Projects:**

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript prettier
```

**For React/UI projects:**

```bash
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript prettier eslint-plugin-react eslint-plugin-react-hooks
```

### Optional: Pre-commit Hooks Setup

To automatically run ESLint and Prettier before commits:

```bash
# Add prepare script to package.json
npm pkg set scripts.prepare="husky install"

# Initialize husky
npm run prepare

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

### Project Structure After Setup

After installation and configuration, your project should have this structure:

```
your-codeiqlabs-project/
├── package.json                 # Scripts and dependencies
├── eslint.config.mjs            # ESLint configuration
├── prettier.config.mjs          # Prettier configuration
├── lint-staged.config.mjs       # Pre-commit hooks (optional)
├── .husky/                      # Git hooks (optional)
│   └── pre-commit
├── src/                         # Your source code
│   └── index.ts
└── dist/                        # Build output (ignored by linting)
```

### What's Included vs. What You Install

**Automatically included** (bundled dependencies):

- `eslint-config-prettier` - Disables conflicting ESLint formatting rules
- `globals` - Global variable definitions for different environments
- `husky` - Git hooks for pre-commit automation (when using pre-commit setup)
- `lint-staged` - Run linters on staged files (when using pre-commit setup)

**You must install** (peer dependencies):

- `eslint` ^9.0.0 - The ESLint linter itself
- `@typescript-eslint/parser` ^8.0.0 - TypeScript parser for ESLint
- `@typescript-eslint/eslint-plugin` ^8.0.0 - TypeScript-specific linting rules
- `prettier` ^3.3.3 - Code formatter (for running format commands)

**Optional for React projects**:

- `eslint-plugin-react` ^7.37.0 - React-specific linting rules
- `eslint-plugin-react-hooks` ^5.0.0 - React Hooks linting rules

## Usage by Project Type

### Minimal (CDK, Infrastructure, Utilities)

**ESLint configuration (`eslint.config.mjs`):**

```javascript
import minimal from '@codeiqlabs/eslint-prettier-config/minimal';
export default minimal;
```

**Use for**: CDK projects, infrastructure utilities, simple TypeScript libraries **Includes**: Base
JavaScript/TypeScript rules, Prettier integration **Dependencies**: No React dependencies

### Standard (API, Backend Projects)

**ESLint configuration (`eslint.config.mjs`):**

```javascript
import standard from '@codeiqlabs/eslint-prettier-config/standard';
export default standard;
```

**Use for**: API servers, backend services, comprehensive TypeScript projects **Includes**: All
minimal rules plus testing utilities and enhanced linting **Dependencies**: No React dependencies

### React (UI Projects)

**ESLint configuration (`eslint.config.mjs`):**

```javascript
import react from '@codeiqlabs/eslint-prettier-config/react';
export default react;
```

**Use for**: React applications, UI components, frontend projects **Includes**: All minimal rules
plus React-specific linting **Dependencies**: Requires `eslint-plugin-react` and
`eslint-plugin-react-hooks`

## Common Configuration

### Prettier Configuration (All Project Types)

**Prettier configuration (`prettier.config.mjs`):**

```javascript
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

### Package.json Scripts (All Project Types)

```json
{
  "scripts": {
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

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

## Pre-commit Hooks Configuration

After completing the optional pre-commit hooks setup from the Installation section, configure
lint-staged for your project type:

### Configuration by Project Type

**CDK/Infrastructure projects:**

```javascript
// lint-staged.config.mjs
import { lintStagedMinimalConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedMinimalConfig;
```

**API projects:**

```javascript
// lint-staged.config.mjs
import { lintStagedConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedConfig;
```

**React/UI projects:**

```javascript
// lint-staged.config.mjs
import { lintStagedReactConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';
export default lintStagedReactConfig;
```

### Available Configurations

- **`lintStagedMinimalConfig`** - For CDK/infrastructure projects (TypeScript, JSON, YAML)
- **`lintStagedConfig`** - For API projects (includes Markdown and additional file types)
- **`lintStagedReactConfig`** - For React/UI projects (includes CSS, HTML, and all UI file types)

## What's exported (dual ESM + CJS)

| Subpath                                         | ESM import                                             | CJS require                                                 |
| ----------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| `@codeiqlabs/eslint-prettier-config`            | `import cfg from '@codeiqlabs/eslint-prettier-config'` | `const cfg = require('@codeiqlabs/eslint-prettier-config')` |
| `@codeiqlabs/eslint-prettier-config/minimal`    | `import minimal from '@.../minimal'`                   | `const minimal = require('@.../minimal')`                   |
| `@codeiqlabs/eslint-prettier-config/react`      | `import react from '@.../react'`                       | `const react = require('@.../react')`                       |
| `@codeiqlabs/eslint-prettier-config/prettier`   | `import p from '@.../prettier'`                        | `const p = require('@.../prettier')`                        |
| `@codeiqlabs/eslint-prettier-config/ignores`    | `import {…} from '@.../ignores'`                       | `const {…} = require('@.../ignores')`                       |
| `@codeiqlabs/eslint-prettier-config/pre-commit` | `import {…} from '@.../pre-commit'`                    | `const {…} = require('@.../pre-commit')`                    |

Default export of root (`@codeiqlabs/eslint-prettier-config`) is `minimal` for smooth ESM
default-imports.

React preset is a subpath (`./react`) so the optional React plugins are not forced on non-React
repos.

## Validate (for this package)

From this repo:

```bash
# Build both module formats and mark dist/cjs as commonjs
npm run build

# Smoke test: loads CJS output and (optionally) the React preset
npm run test:load

# Quick manual checks (optional)
node -p "require('./dist/cjs/index.js') && 'CJS OK'"
node -e "import('./dist/esm/index.js').then(()=>console.log('ESM OK'))"
```

You should see ✅ ESLint config smoke test passed and the two "OK" messages.

## Validate (in a consuming repo)

Resolve the final config for a sample file:

```bash
npx eslint --print-config src/index.ts > .tmp.eslint.json
```

Make sure you see:

- a first object with `ignores: ["**/dist/**", "..."]`
- a second object with `languageOptions.parser: "@typescript-eslint/parser"` and your rules

Run lint:

```bash
npx eslint .
```

If you see "all files ignored," you likely exported the package object instead of a preset array.
Use one of the Usage examples above (don't export the whole object).

## Troubleshooting

### "Named export not found" (ESM)

Use the default import from the root:

```javascript
import cfg from '@codeiqlabs/eslint-config';
export default cfg;
```

or import the subpath:

```javascript
import minimal from '@codeiqlabs/eslint-config/minimal';
```

### "Cannot use import statement outside a module" (CJS)

Ensure you're requiring from the CJS export (which our exports field maps automatically). If you're
requiring built files directly, use `dist/cjs/*.js`, not `dist/esm/*.js`.

### React preset fails to load

Install the optional peers in the consumer:

```bash
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

## Dependency Management

This package follows modern npm ecosystem best practices for dependency management:

### Package Lock Files

We commit `package-lock.json` to ensure consistent dependency resolution across all environments and contributors. This practice:

- **Ensures reproducible builds** - All developers and CI/CD systems use identical dependency versions
- **Prevents dependency drift** - Eliminates "works on my machine" issues caused by version mismatches
- **Improves security** - Locks specific versions that have been tested and verified
- **Follows modern standards** - Current npm ecosystem best practice for both applications and libraries

The outdated advice to exclude lockfiles for libraries has been superseded by the understanding that consistent dependency resolution benefits all project types.

## Versioning & Releases

We use Changesets with SemVer:

- **patch**: fixes/docs/build tweaks
- **minor**: new preset(s) or additive config
- **major**: breaking rule defaults or removed exports

Publishing targets GitHub Packages (`publishConfig.registry=https://npm.pkg.github.com`). Consumers
pulling from GH Packages must configure their `.npmrc` accordingly.

## License

MIT © CodeIQLabs
