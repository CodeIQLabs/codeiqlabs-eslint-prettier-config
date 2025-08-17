# @codeiqlabs/eslint-prettier-config

Shared ESLint v9 flat config and Prettier config for CodeIQLabs projects.
Published as dual module: ESM and CJS via conditional exports.

## Install

```bash
# Required peer dependencies
npm i -D @codeiqlabs/eslint-prettier-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier

# React projects (optional peers):
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

## Usage (ESLint v9 flat config)

### Centralized ESLint config (included)

Create an ESLint configuration file:

**For CommonJS projects:**
```javascript
// eslint.config.js
module.exports = require('@codeiqlabs/eslint-prettier-config').minimal;

// React apps (optional plugins required):
// module.exports = require('@codeiqlabs/eslint-prettier-config/react');
```

**For ESM projects or projects that ignore *.js files:**
```javascript
// eslint.config.mjs (recommended for projects that ignore *.js files)
import minimal from '@codeiqlabs/eslint-prettier-config/minimal';
export default minimal;

// React apps:
// import react from '@codeiqlabs/eslint-prettier-config/react';
// export default react;
```

Add lint scripts to `package.json`:
```json
{
  "scripts": {
    "lint": "npx eslint .",
    "lint:fix": "npx eslint . --fix"
  }
}
```

**Tip:** Prefer `npx eslint .` instead of passing globs; our preset already ships a global ignores block for `dist`, `build`, `.next`, `coverage`, etc.

### Centralized Prettier config (included)

Create a Prettier configuration file:

**For CommonJS projects:**
```javascript
// prettier.config.js
module.exports = require('@codeiqlabs/eslint-prettier-config/prettier');
```

**For ESM projects or projects that ignore *.js files:**
```javascript
// prettier.config.mjs
import config from '@codeiqlabs/eslint-prettier-config/prettier';
export default config;
```

Add format scripts to `package.json`:
```json
{
  "scripts": {
    "format": "npx prettier . --write",
    "format:check": "npx prettier . --check"
  }
}
```

**Note:** If using `.mjs` config files, specify the config explicitly:
```json
{
  "scripts": {
    "format": "npx prettier --config prettier.config.mjs . --write",
    "format:check": "npx prettier --config prettier.config.mjs . --check"
  }
}
```



## What's exported (dual ESM + CJS)

| Subpath | ESM import | CJS require |
|---------|------------|-------------|
| `@codeiqlabs/eslint-prettier-config` | `import cfg from '@codeiqlabs/eslint-prettier-config'` | `const cfg = require('@codeiqlabs/eslint-prettier-config')` |
| `@codeiqlabs/eslint-prettier-config/minimal` | `import minimal from '@.../minimal'` | `const minimal = require('@.../minimal')` |
| `@codeiqlabs/eslint-prettier-config/react` | `import react from '@.../react'` | `const react = require('@.../react')` |
| `@codeiqlabs/eslint-prettier-config/prettier` | `import p from '@.../prettier'` | `const p = require('@.../prettier')` |
| `@codeiqlabs/eslint-prettier-config/ignores` | `import {…} from '@.../ignores'` | `const {…} = require('@.../ignores')` |

Default export of root (`@codeiqlabs/eslint-prettier-config`) is `minimal` for smooth ESM default-imports.

React preset is a subpath (`./react`) so the optional React plugins are not forced on non-React repos.

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

If you see "all files ignored," you likely exported the package object instead of a preset array. Use one of the Usage examples above (don't export the whole object).

## Troubleshooting

### "Named export not found" (ESM)
Use the default import from the root:
```javascript
import cfg from '@codeiqlabs/eslint-config'; export default cfg;
```
or import the subpath:
```javascript
import minimal from '@codeiqlabs/eslint-config/minimal';
```

### "Cannot use import statement outside a module" (CJS)
Ensure you're requiring from the CJS export (which our exports field maps automatically). If you're requiring built files directly, use `dist/cjs/*.js`, not `dist/esm/*.js`.

### React preset fails to load
Install the optional peers in the consumer:
```bash
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

## Versioning & Releases

We use Changesets with SemVer:

- **patch**: fixes/docs/build tweaks
- **minor**: new preset(s) or additive config
- **major**: breaking rule defaults or removed exports

Publishing targets GitHub Packages (`publishConfig.registry=https://npm.pkg.github.com`). Consumers pulling from GH Packages must configure their `.npmrc` accordingly.

## License

MIT © CodeIQLabs
