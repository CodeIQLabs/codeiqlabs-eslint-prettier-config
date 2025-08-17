# Release Template

When creating changesets, use this template for consistent release notes:

## For Patch Releases (Bug Fixes)
```
fix: [brief description]

- Fixed [specific issue]
- Resolved [specific problem]
- Updated [specific component] to handle [specific case]
```

## For Minor Releases (New Features)
```
feat: [brief description]

- Added [new feature/preset/configuration]
- Enhanced [existing functionality]
- Improved [specific aspect]
```

## For Major Releases (Breaking Changes)
```
BREAKING: [brief description]

- **BREAKING**: [specific breaking change]
- **Migration**: [how to migrate]
- Removed [deprecated feature]
- Changed [behavior] from [old] to [new]
```

## Examples

### Good Changeset Examples:
- `fix: resolve TypeScript parsing issues with React JSX`
- `feat: add new strict React preset with additional rules`
- `BREAKING: remove deprecated .eslintrc support, require flat config`

### Poor Changeset Examples:
- `update stuff`
- `fix bug`
- `changes`

## Creating a Changeset

1. Run `npm run changeset`
2. Select the type of change (patch/minor/major)
3. Write a clear, descriptive summary
4. Include details about what changed and why
5. For breaking changes, include migration instructions
