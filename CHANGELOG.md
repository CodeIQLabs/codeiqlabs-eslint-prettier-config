# @codeiqlabs/eslint-config

## 1.8.1

### Patch Changes

- ecc43c6: Comprehensive documentation improvements and CI workflow cleanup.
  - Remove decorative emojis for professional consistency
  - Add JSON Schema integration section with IDE setup instructions
  - Document manual setup requirements (npm run prepare, .mjs files)
  - Add troubleshooting section and manual setup checklist
  - Simplify CI workflow and remove unnecessary steps
  - Remove .npmrc (not needed for this package)
  - Add professional ecosystem footer

## 1.9.0

### Patch Changes

- Comprehensive documentation improvements and CI workflow cleanup
  - Remove all decorative emojis for professional presentation
  - Add comprehensive JSON Schema integration section with IDE setup instructions
  - Document manual setup requirements clearly (npm run prepare, .mjs files)
  - Add troubleshooting section for common setup issues
  - Update installation instructions with required manual steps
  - Add manual setup checklist for verification
  - Remove .npmrc files (not needed for this package)
  - Simplify CI workflow by removing unnecessary steps
  - Add professional footer matching CodeIQLabs ecosystem standards

  This release focuses on improving developer experience and documentation clarity without any
  functional code changes.

## 1.8.0

### Minor Changes

- 1f2a0ab: Commit package-lock.json for improved dependency consistency
  - Adopt modern best practice of committing package-lock.json for both applications and libraries
  - Ensures consistent dependency resolution across all environments and contributors
  - Improves reproducible builds and reduces dependency-related issues
  - The advice to exclude lockfiles for libraries is outdated - modern practice is to commit
    lockfiles for all project types
  - Package-lock.json is already tracked and will continue to be committed going forward

  This change aligns with current npm and Node.js ecosystem best practices for dependency
  management.

## 1.6.0

### Minor Changes

- 0cda42c: Exclude compiled JavaScript files and improve CI/CD compatibility
  - Add `**/*.js` to ignores to exclude compiled JavaScript files (especially CDK-generated)
  - Remove `.js` from file patterns in base config and lint-staged configs to prevent linting
    compiled files
  - Update React dependencies: `eslint-plugin-react@7.37.0`, `eslint-plugin-react-hooks@5.0.0`
  - Add `@eslint/js` dependency for enhanced ESLint support
  - Change Husky setup from `prepare` to `postinstall` script for better CI/CD compatibility
  - Add `npm run format` to build script for consistent formatting
  - Clean up eslint.config.mjs by removing unnecessary comments

  This release improves compatibility with CDK projects and other tools that generate JavaScript
  files by excluding them from linting while maintaining strict linting for source TypeScript files.

## 1.5.0

### Minor Changes

- 0bf27f5: feat: restructure package with modular configuration architecture
  - **BREAKING**: Restructured internal configuration architecture for better separation of concerns
  - Added new `src/configs/` directory with modular configuration files:
    - `base.ts` - Fundamental JavaScript/ES2024 rules and globals
    - `typescript.ts` - TypeScript-specific parsing and linting rules
    - `prettier.ts` - Prettier integration configuration
    - `react.ts` - React-specific configurations (separate from minimal)
  - Added new `standard` configuration export for API/backend projects with testing utilities
  - Updated React plugin versions to support ESLint 9.x:
    - `eslint-plugin-react`: ^7.37.0 (was ^7.34.0)
    - `eslint-plugin-react-hooks`: ^5.0.0 (was ^4.6.0)
  - Added `@eslint/js` dependency for recommended JavaScript rules
  - Improved error messages for missing React dependencies with installation instructions
  - Enhanced TypeScript configuration with additional recommended rules
  - Better separation ensures minimal config has zero React dependencies

  **Migration Guide:**
  - No breaking changes for consumers - all existing exports work the same
  - New `standard` configuration available for projects needing more comprehensive rules
  - React configurations now properly isolated and only load when explicitly imported

  This resolves dependency conflicts where React plugins were being pulled into non-React projects.

## 1.4.1

### Patch Changes

- c152e4c: feat: publish shareable pre-commit hooks for Prettier & Eslint. No rule or runtime
  behavior changes.
- 0d4b410: chore(ci/release): enforce Prettier + build in PRs and publish on main via Changesets. No
  rule or runtime behavior changes.

## 1.4.0

### Minor Changes

- 8a54727: feat: centralize Prettier config and export as
  `@codeiqlabs/eslint-prettier-config/prettier`
  - Publish dual ESM/CJS via conditional exports
  - Update README with CJS/ESM usage + format scripts
  - Scope TS parsing to `*.ts,*.tsx`; switch to `import * as parser` interop
  - Add/globalize ignore patterns
  - Rename package & repo to `@codeiqlabs/eslint-prettier-config`

  **Migration**
  - Replace imports from `@codeiqlabs/eslint-config` → `@codeiqlabs/eslint-prettier-config`
  - Point Prettier to the exported config (see README)

  ***

  ## "@codeiqlabs/eslint-config": minor

  ## Dual-publish ESM+CJS; Node16 ESM import fixes; default export = minimal; smoke test

  ## "@codeiqlabs/eslint-config": minor

  Migrate config to TypeScript (CJS output), centralize flat-config `ignores`, ship type defs, and
  add a smoke test. No rule behavior changes.

## 1.2.0

### Minor Changes

- 90f4df5: Add centralized Prettier config and export as subpath; remove unused react-strict export;
  append eslint-config-prettier to flat configs.
