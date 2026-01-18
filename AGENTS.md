---
trigger: always_on
---

## Purpose

Shared ESLint and Prettier configuration package for all CodeIQLabs repositories. Provides:

- **ESLint v9 flat configs** - Minimal, Standard, React, and React-Nx presets
- **Prettier configuration** - Shared formatting defaults
- **Pre-commit hooks** - Husky + lint-staged templates
- **Dual ESM/CJS builds** - Compatible with both module systems
- **TypeScript support** - Full type definitions and TS-specific rules

## Current State

Active and stable. Published to GitHub Packages. Used across all CodeIQLabs repositories.

**Version**: 1.11.1  
**Package**: `@codeiqlabs/eslint-prettier-config`

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                  @codeiqlabs/eslint-prettier-config          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Minimal    │  │   Standard   │  │    React     │      │
│  │              │  │              │  │              │      │
│  │ Base + TS +  │  │ Minimal +    │  │ Minimal +    │      │
│  │ Prettier     │  │ Testing +    │  │ React +      │      │
│  │              │  │ Enhanced     │  │ Hooks        │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  React-Nx    │  │   Prettier   │  │  Pre-commit  │      │
│  │              │  │              │  │              │      │
│  │ React +      │  │ Formatting   │  │ Husky +      │      │
│  │ Nx Plugin    │  │ Defaults     │  │ lint-staged  │      │
│  │              │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ (consumed by)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  CodeIQLabs Repositories                                     │
│  - codeiqlabs-aws-cdk (Minimal)                             │
│  - codeiqlabs-aws-utils (Minimal)                           │
│  - codeiqlabs-customization-aws (Minimal)                   │
│  - codeiqlabs-management-aws (Minimal)                      │
│  - codeiqlabs-saas-aws (Minimal)                            │
│  - codeiqlabs-saas-ui (React-Nx)                            │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Build ESM and CJS outputs
pnpm run build

# Run tests
pnpm run test:all

# Lint and format
pnpm run lint
pnpm run format:check
```

### Publishing

```bash
# Create a changeset
pnpm changeset

# Version packages (updates CHANGELOG.md and package.json)
pnpm changeset:version

# Build and publish (automated via CI)
pnpm run release
```

### Consuming in Other Repos

```bash
# Install the package
pnpm add -D @codeiqlabs/eslint-prettier-config

# Create eslint.config.mjs
echo "import minimal from '@codeiqlabs/eslint-prettier-config/minimal';\nexport default minimal;" > eslint.config.mjs

# Create prettier.config.mjs
echo "import config from '@codeiqlabs/eslint-prettier-config/prettier';\nexport default config;" > prettier.config.mjs
```

## Dependencies

**Peer Dependencies** (required):

- `eslint` ^9.0.0
- `@typescript-eslint/parser` ^8.0.0
- `@typescript-eslint/eslint-plugin` ^8.0.0

**Optional Peer Dependencies** (for React/Nx presets):

- `eslint-plugin-react` ^7.37.0
- `eslint-plugin-react-hooks` ^5.0.0
- `@nx/eslint-plugin` ^22.0.0

## Gotchas

- **Always bump version before publishing** - Consumers won't get updates without a version change
- **Use changesets for versioning** - Don't manually edit version numbers
- **Build before testing** - Tests run against compiled `dist/` output, not source
- **React plugins are optional** - Only needed when using React or React-Nx presets
- **Dual builds required** - Must build both ESM and CJS for compatibility
- **Dogfooding is critical** - This repo uses its own configs; breaking changes will fail CI
- **pnpm-lock.yaml is tracked** - Switched from npm to pnpm for consistency with other repos

## Architecture Decisions

### Dual ESM/CJS Builds

- **Why**: Support both modern ESM projects and legacy CJS projects
- **How**: Separate TypeScript builds with different module targets
- **Trade-off**: More complex build process, but broader compatibility

### Flat Config (ESLint v9)

- **Why**: ESLint v9 requires flat config format
- **How**: Export arrays of config objects instead of legacy `.eslintrc` format
- **Trade-off**: Breaking change from older ESLint versions, but future-proof

### Optional React Dependencies

- **Why**: Don't force React plugins on non-React projects
- **How**: React preset is a separate subpath export with optional peer deps
- **Trade-off**: Consumers must install React plugins separately

### Minimal as Default

- **Why**: Most CodeIQLabs repos are infrastructure/CDK projects
- **How**: Root export (`@codeiqlabs/eslint-prettier-config`) is minimal preset
- **Trade-off**: React projects must explicitly import `/react` subpath

### Dogfooding

- **Why**: Ensure configs work in real-world usage before publishing
- **How**: This repo uses its own exported configs for linting/formatting
- **Trade-off**: Can't publish broken configs (which is a good thing!)

## Anti-Patterns

❌ **Don't add repo-specific rules here** - Use local overrides in consuming repos instead  
❌ **Don't publish without running tests** - `prepublishOnly` script prevents this  
❌ **Don't manually edit version numbers** - Use changesets workflow  
❌ **Don't skip the build step** - Tests and publishing require compiled output  
❌ **Don't commit dist/ to git** - Build artifacts are generated, not source  
❌ **Don't reference FILE-REFERENCE.md** - This file was removed; use README.md instead

## Key Files

### Source Code (`/src`)

- **`index.ts`** - Root export (re-exports minimal preset)
- **`minimal.ts`** - Base + TypeScript + Prettier (for CDK/infrastructure)
- **`standard.ts`** - Minimal + testing + enhanced rules (for APIs/backend)
- **`react.ts`** - Minimal + React + Hooks (for React apps)
- **`react-nx.ts`** - React + Nx plugin (for Nx monorepos)
- **`prettier-config.ts`** - Shared Prettier options
- **`pre-commit-config.ts`** - Husky + lint-staged templates
- **`ignores.ts`** - Common ignore patterns (dist, build, .next, etc.)

### Config Building Blocks (`/src/configs`)

- **`base.ts`** - JavaScript/ES2024 defaults
- **`typescript.ts`** - TypeScript parser and rules
- **`prettier.ts`** - ESLint/Prettier compatibility
- **`testing.ts`** - Relaxed rules for test files
- **`enhanced.ts`** - Additional TypeScript/backend rules
- **`react.ts`** - React and React Hooks plugin configs

### Tests (`/tests`)

- **`load-config.test.cjs`** - Smoke test for CJS imports
- **`pre-commit-config.test.cjs`** - Validates pre-commit exports
- **`react-nx-config.test.cjs`** - Tests React-Nx preset
- **`esm-import-test.mjs`** - Validates ESM imports

### Build Configuration

- **`tsconfig.esm.json`** - ESM build target
- **`tsconfig.cjs.json`** - CJS build target
- **`package.json`** - Dual exports, scripts, dependencies

### CI/CD

- **`.github/workflows/ci.yml`** - PR checks (lint, format, build, test)
- **`.github/workflows/release.yml`** - Automated publishing via changesets

## Source of Truth

[codeiqlabs-docs](../codeiqlabs-docs/AGENTS.md)
