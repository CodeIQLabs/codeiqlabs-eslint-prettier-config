---
'@codeiqlabs/eslint-prettier-config': minor
---

feat: restructure package with modular configuration architecture

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
