# @codeiqlabs/eslint-config

Shared ESLint v9 flat config for CodeIQLabs projects.

## Usage

Install this package and its peer dependencies, then reference one of the exposed presets:

```json
{
  "eslintConfig": {
    "extends": ["@codeiqlabs/eslint-config"]
    // or "@codeiqlabs/eslint-config/minimal" or "@codeiqlabs/eslint-config/react"
  }
}
```

### Prettier (centralized)

Install Prettier in the consuming repo:

```bash
npm i -D prettier
```

Point to this package’s Prettier config (no local .prettierrc needed):

```json
{
  "prettier": "@codeiqlabs/eslint-config/prettier",
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

This package also includes a default .prettierignore. Consumers may add their own if needed.
