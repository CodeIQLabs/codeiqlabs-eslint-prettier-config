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

**Consistency Across Projects** - All CodeIQLabs repositories use identical code quality standards
**Zero Configuration** - Import and use immediately with sensible defaults
**Automated Quality Enforcement** - Pre-commit hooks prevent bad code from being committed
**Battle-Tested** - This package uses its own configurations (dogfooding) to ensure reliability
**Easy Updates** - Update linting rules across all projects by updating one package
**Developer Experience** - Reduces setup time and eliminates configuration drift

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
npm run lint        # All files pass ESLint rules
npm run format:check # All files follow Prettier formatting
```

### How Dogfooding Validates Quality

By using its own configurations, this package ensures:

**Real-World Testing** - Every feature is tested on actual TypeScript/JavaScript code, not just examples
**Continuous Validation** - All commits automatically run through the same quality checks that consuming projects use
**Breaking Change Prevention** - Configuration changes that would break existing projects are caught immediately
**Publication Confidence** - Only configurations that successfully lint and format this codebase are published
**Feedback Loop** - Issues with configurations are discovered and fixed during development of the package itself

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

### Pre-commit Hooks Setup (ESSENTIAL FOR CODE QUALITY)

**IMPORTANT**: Pre-commit hooks are essential for this library's value proposition. Follow these steps carefully:

**1. Install Husky and lint-staged:**
```bash
npm install --save-dev husky lint-staged
```

**2. Add prepare script to package.json (REQUIRED):**
```bash
npm pkg set scripts.prepare="husky"
```

**3. Initialize Husky (REQUIRED MANUAL STEP):**
```bash
npm run prepare
```

**4. Create pre-commit hook manually:**
```bash
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

**Note**: The `npx husky add` command is deprecated. Use the manual approach above.

### Required Manual Configuration Files

You must create these configuration files in your project root:

**1. ESLint Configuration (`eslint.config.mjs`):**
```javascript
import { eslintConfigMinimal } from '@codeiqlabs/eslint-prettier-config';

export default eslintConfigMinimal;
```

**2. Prettier Configuration (`prettier.config.mjs`):**
```javascript
import { prettierConfig } from '@codeiqlabs/eslint-prettier-config';

export default prettierConfig;
```

**3. lint-staged Configuration (`lint-staged.config.mjs`):**
```javascript
import { lintStagedMinimalConfig } from '@codeiqlabs/eslint-prettier-config/pre-commit';

export default lintStagedMinimalConfig;
```

**4. Package.json Scripts (add to your existing scripts):**
```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier --write .",
    "format:check": "npx prettier --check ."
  }
}
```

### Project Structure After Setup

After installation and configuration, your project should have this structure:

```
your-codeiqlabs-project/
├── package.json                 # Scripts and dependencies (with prepare script)
├── eslint.config.mjs            # ESLint configuration (REQUIRED)
├── prettier.config.mjs          # Prettier configuration (REQUIRED)
├── lint-staged.config.mjs       # Pre-commit hooks configuration (REQUIRED)
├── .husky/                      # Git hooks directory (created by npm run prepare)
│   └── pre-commit               # Pre-commit hook (created manually)
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

After completing the pre-commit hooks setup from the Installation section, configure
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

## Versioning & Releases

We use Changesets with SemVer:

- **patch**: fixes/docs/build tweaks
- **minor**: new preset(s) or additive config
- **major**: breaking rule defaults or removed exports

Publishing targets GitHub Packages (`publishConfig.registry=https://npm.pkg.github.com`). Consumers
pulling from GH Packages must configure their `.npmrc` accordingly.

## Troubleshooting

### Common Setup Issues

**1. Pre-commit hooks not running:**
- Ensure you've run `npm run prepare` to initialize Husky
- Verify `.husky/pre-commit` file exists and is executable
- Check that `lint-staged.config.mjs` file exists in project root

**2. ESLint configuration not found:**
- Verify `eslint.config.mjs` file exists in project root
- Check that the import statement matches the exact export name
- Ensure the configuration file uses `.mjs` extension

**3. Prettier not formatting files:**
- Verify `prettier.config.mjs` file exists in project root
- Check that your editor is configured to use the project's Prettier config
- Run `npx prettier --check .` to verify configuration is working

**4. lint-staged reports "No staged files match any configured task":**
- Verify `lint-staged.config.mjs` file exists and exports the correct configuration
- Check that you're staging files that match the configured patterns
- Ensure the configuration import path is correct

**5. Package not found errors:**
- Verify you've installed all required dependencies
- For React projects, ensure you've installed the additional React ESLint plugins
- Check that your package.json includes the `prepare` script

### Manual Setup Checklist

Ensure you have completed all these manual steps:

- [ ] Created `eslint.config.mjs` with correct import
- [ ] Created `prettier.config.mjs` with correct import
- [ ] Created `lint-staged.config.mjs` with correct import
- [ ] Added `prepare` script to package.json
- [ ] Ran `npm run prepare` to initialize Husky
- [ ] Created `.husky/pre-commit` file manually
- [ ] Made `.husky/pre-commit` file executable

## License

MIT - See [LICENSE](LICENSE) file for details.

---

**Part of the CodeIQLabs infrastructure ecosystem** - Standardized ESLint and Prettier
configurations with automated pre-commit hooks for consistent code quality across all projects.
