# @codeiqlabs/eslint-config

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
