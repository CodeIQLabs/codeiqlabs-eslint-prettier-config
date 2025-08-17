# @codeiqlabs/eslint-config

Shared ESLint v9 flat config (with centralized ignores) for CodeIQLabs projects.
Now published as dual module: ESM and CJS via conditional exports.

## Install

```bash
# eslint + typescript-eslint peers are required in the consuming repo
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# React projects (optional peers):
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

Prettier is separate (we ship a centralized config; see below).

## Usage (ESLint v9 flat config)

### CJS consumer (Node "commonjs" / eslint.config.cjs)

```javascript
// eslint.config.cjs
const { minimal } = require('@codeiqlabs/eslint-config');
module.exports = minimal;

// React apps (optional plugins required):
// module.exports = require('@codeiqlabs/eslint-config/react');
```

### ESM consumer (Node "module" or eslint.config.mjs)

```javascript
// eslint.config.js (ESM)
import cfg from '@codeiqlabs/eslint-config'; // default export = minimal
export default cfg;

// Or named subpath (React preset):
// import react from '@codeiqlabs/eslint-config/react';
// export default react;
```

**Tip:** Prefer `npx eslint .` instead of passing globs; our preset already ships a global ignores block for `dist`, `build`, `.next`, `coverage`, etc.

## Centralized Prettier config (optional but recommended)

We publish a Prettier config you can reference directly—no local `.prettierrc` needed.

In the consuming repo:

```bash
npm i -D prettier
```

```json
// package.json
{
  "prettier": "@codeiqlabs/eslint-config/prettier",
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

## What's exported (dual ESM + CJS)

| Subpath | ESM import | CJS require |
|---------|------------|-------------|
| `@codeiqlabs/eslint-config` | `import cfg from '@codeiqlabs/eslint-config'` | `const cfg = require('@codeiqlabs/eslint-config')` |
| `@codeiqlabs/eslint-config/minimal` | `import minimal from '@.../minimal'` | `const minimal = require('@.../minimal')` |
| `@codeiqlabs/eslint-config/react` | `import react from '@.../react'` | `const react = require('@.../react')` |
| `@codeiqlabs/eslint-config/prettier` | `import p from '@.../prettier'` | `const p = require('@.../prettier')` |
| `@codeiqlabs/eslint-config/ignores` | `import {…} from '@.../ignores'` | `const {…} = require('@.../ignores')` |

Default export of root (`@codeiqlabs/eslint-config`) is `minimal` for smooth ESM default-imports.

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
