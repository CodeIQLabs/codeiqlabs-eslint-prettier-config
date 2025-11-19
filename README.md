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

**Install** (add React peers only for the React preset):

```bash
# Minimal / Standard
npm i -D @codeiqlabs/eslint-prettier-config eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

# React preset (add peers)
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

**ESLint (flat config)**

```js
// eslint.config.mjs
import minimal from '@codeiqlabs/eslint-prettier-config/minimal'; // or '/standard' or '/react'
export default minimal;
```

**Prettier**

```js
// prettier.config.mjs
export { default } from '@codeiqlabs/eslint-prettier-config/prettier';
```

**Pre-commit (Husky + lint-staged)**

```js
// lint-staged.config.mjs
export { lintStagedMinimalConfig as default } from '@codeiqlabs/eslint-prettier-config/pre-commit';
// or: lintStagedConfig / lintStagedReactConfig
```

Initialize Husky (optional helper):

```bash
npx husky init && npm pkg set scripts.prepare="husky"
```

## Requirements & compatibility

- ESLint v9 flat config, Prettier 3.
- Node.js >= 18.18 (matches repo engines).
- TypeScript 5.4+ supported.
- Peer dependencies: `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`; React preset additionally requires `eslint-plugin-react` and `eslint-plugin-react-hooks` (both optional peers).

## Repo structure

- `src/minimal.ts`, `src/standard.ts`, `src/react.ts` — ESLint presets.
- `src/configs/{base,typescript,prettier,testing,enhanced,react}.ts` — building blocks.
- `src/prettier-config.ts` — Prettier options.
- `src/pre-commit-config.ts` — Husky/lint-staged templates.
- `eslint.config.mjs`, `prettier.config.mjs`, `lint-staged.config.mjs`, `.husky/` — dogfooding setup.
- `tests/*` — ESM/CJS import smoke tests and pre-commit config checks.

## Usage guidance

- Choose **Minimal** for libraries, CLIs, and infrastructure services.
- Choose **Standard** for apps/APIs with tests and stricter TS expectations.
- Choose **React** for frontends; install the React plugin peers.

## Troubleshooting / FAQ

- **“ESLint can’t find a plugin”** → install the missing peerDependency (React plugins are optional).
- **“Prettier conflicts with ESLint”** → presets already include Prettier compat; ensure your editor uses the project Prettier config.
- **“eslint.config.* is ignored”** → this package uses flat config; ensure the file is `eslint.config.mjs`.

## Contributing & license

MIT licensed. See [LICENSE](LICENSE), [CONTRIBUTING.md](CONTRIBUTING.md), and [CHANGELOG.md](CHANGELOG.md).
Releases are automated with Changesets; CI runs format/lint/tests via GitHub Actions.
