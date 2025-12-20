# CodeIQLabs ESLint & Prettier Config - Complete File Reference

This document describes every source and support file in the `@codeiqlabs/eslint-prettier-config`
repository and its purpose.

## Repository Overview

**Package Name**: `@codeiqlabs/eslint-prettier-config`  
**Version**: 1.8.1  
**Description**: Shared ESLint v9 flat configs, Prettier settings, and pre-commit templates for
CodeIQLabs projects (ESM and CJS builds).

---

## Root Directory Files

### Configuration & Metadata

- **`package.json` / `package-lock.json`** – Package metadata, dual-module entry points, peer
  dependencies, scripts, and locked dependency graph.
- **`tsconfig.esm.json`** / **`tsconfig.cjs.json`** – TypeScript build targets for ESM and CJS
  outputs, referenced by the build pipeline.
- **`eslint.config.mjs`** – Project linting entry that dogfoods the published minimal config.
- **`prettier.config.mjs`** – Prettier setup that re-exports the shared formatter defaults.
- **`lint-staged.config.mjs`** – Lint-staged presets wired to the published pre-commit config.
- **`.husky/`** – Pre-commit hook scripts used for local quality enforcement.
- **`.changeset/`** – Changesets configuration and documentation for release notes generation.

### Documentation

- **`README.md`** – Package overview, installation, and dogfooding explanation.
- **`CHANGELOG.md`** – Version history maintained by Changesets.
- **`CONTRIBUTING.md`** – Contribution expectations and workflow notes.
- **`FILE-REFERENCE.md`** – This file.

### CI/CD & Release Automation

- **`.github/workflows/ci.yml`** – Pull request checks for formatting, build, tests, and changeset
  validation.
- **`.github/workflows/release.yml`** – Main-branch release pipeline that rebuilds, tests, and
  publishes via Changesets to GitHub Packages.

---

## `/src` – Source Code (TypeScript)

Configuration presets exported to consumers (built to `dist/`).

- **`src/index.ts`** – Barrel exporting the minimal ESLint preset plus shared ignore globs; keeps
  React preset as an optional subpath.
- **`src/minimal.ts`** – Minimal ESLint flat config combining base rules, TypeScript settings,
  Prettier integration, and global ignores.
- **`src/standard.ts`** – Standard preset extending minimal with testing relaxations and enhanced
  TypeScript/backend rules.
- **`src/react.ts`** – React-oriented preset layered on minimal plus React and React Hooks plugins
  (optional peer deps).
- **`src/ignores.ts`** – Common ignore globs for build artifacts, caches, and compiled JS.
- **`src/prettier-config.ts`** – Shared Prettier options (print width, quotes, trailing commas,
  overrides) exported for ESM and CJS consumers.
- **`src/pre-commit-config.ts`** – Husky and lint-staged templates for minimal, standard, and React
  projects, plus helper scripts for package.json.

### `/src/configs` – ESLint Building Blocks

- **`base.ts`** – JavaScript/ES2024 defaults with global settings and foundational lint rules.
- **`typescript.ts`** – TypeScript parser setup and rules (unused variables, any, floating promises,
  etc.).
- **`prettier.ts`** – ESLint/Prettier compatibility config that disables conflicting rules.
- **`testing.ts`** – Looser rules for test files (console usage, any, empty functions, expressions).
- **`enhanced.ts`** – Additional TypeScript/backend rules like nullish coalescing and no floating
  promises.
- **`react.ts`** – Runtime-loaded React and React Hooks plugin configs with JSX-focused rules and
  hook validations.

### `/src/types`

Ambient type shims for tooling compatibility during builds.

- **`plugins.d.ts`** – Declares module typings for Prettier ESLint config and React plugins plus
  minimal Linter typings.
- **`shims-cjs.d.ts`** – CJS-friendly declarations for TypeScript ESLint parser/plugin and globals.

---

## `/tests` – Validation Scripts

- **`load-config.test.cjs`** – Smoke test ensuring compiled CJS configs load and expose ignores and
  React preset (when dependencies exist).
- **`pre-commit-config.test.cjs`** – Checks that compiled pre-commit exports are objects with
  expected patterns and scripts.
- **`esm-import-test.mjs`** – Verifies ESM imports for lint-staged presets expose expected patterns.

---

## Supporting Infrastructure

- **`node_modules/`** – Installed dependencies for linting, formatting, builds, and testing.
- **`dist/`** _(generated)_ – Emitted build artifacts for ESM/CJS and type declarations; generated
  by the TypeScript build and excluded from source control.
