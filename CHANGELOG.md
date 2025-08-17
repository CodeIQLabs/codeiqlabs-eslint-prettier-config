# @codeiqlabs/eslint-config

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
