---
"@codeiqlabs/eslint-prettier-config": minor
---

Exclude compiled JavaScript files and improve CI/CD compatibility

- Add `**/*.js` to ignores to exclude compiled JavaScript files (especially CDK-generated)
- Remove `.js` from file patterns in base config and lint-staged configs to prevent linting compiled files
- Update React dependencies: `eslint-plugin-react@7.37.0`, `eslint-plugin-react-hooks@5.0.0`
- Add `@eslint/js` dependency for enhanced ESLint support
- Change Husky setup from `prepare` to `postinstall` script for better CI/CD compatibility
- Add `npm run format` to build script for consistent formatting
- Clean up eslint.config.mjs by removing unnecessary comments

This release improves compatibility with CDK projects and other tools that generate JavaScript files by excluding them from linting while maintaining strict linting for source TypeScript files.
