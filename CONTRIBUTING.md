# Contributing to @codeiqlabs/eslint-prettier-config

## Development Workflow

### Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Update source files in `src/`
   - Add tests if applicable
   - Update documentation

3. **Test your changes**

   ```bash
   npm run build
   npm test
   npm run test:load
   npm run format:check
   ```

4. **Create a changeset**

   ```bash
   npm run changeset
   ```

   - Select the appropriate change type (patch/minor/major)
   - Write a clear, descriptive summary
   - See `.changeset/RELEASE_TEMPLATE.md` for guidance

5. **Commit and push**

   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - The CI workflow will automatically validate your changes
   - Ensure you have included a changeset file
   - Wait for review and approval

### Release Process

The release process is fully automated:

1. **Pull Request Merged** → Triggers release workflow
2. **Changesets Action** either:
   - Creates/updates a "Version Packages" PR (if changesets exist)
   - Publishes the package (if Version Packages PR was merged)

### Changeset Guidelines

# Release Template

When creating changesets, use this template for consistent release notes:

#### When to create changesets:

- **Patch**: Bug fixes, documentation updates, internal refactoring
- **Minor**: New features, new presets, additive changes
- **Major**: Breaking changes, removed features, changed APIs

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

### Scripts Reference

```bash
# Development
npm run build          # Build the package
npm run watch          # Watch for changes
npm test              # Run tests
npm run test:load     # Test config loading

# Code Quality
npm run format        # Format code
npm run format:check  # Check formatting

# Changesets
npm run changeset           # Create a new changeset
npm run changeset:version   # Preview version changes
npm run changeset:status    # Check changeset status
npm run changeset:check     # Count changeset files

# Release (automated via CI)
npm run release       # Publish and push tags
```

### Troubleshooting

#### "No changeset found" error in CI

- You need to create a changeset for your changes
- Run `npm run changeset` and commit the generated file

#### Build failures

- Ensure TypeScript compiles: `npm run build`
- Check formatting: `npm run format:check`
- Verify tests pass: `npm test`

#### Release issues

- Check GitHub Actions logs
- Verify GitHub Packages permissions
- Ensure all required secrets are configured

## Code Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Uses our own config (dogfooding)
- **Prettier**: Consistent formatting
- **Testing**: All configs must be loadable

## Questions?

- Check existing issues and discussions
- Review `.changeset/RELEASE_TEMPLATE.md` for changeset guidance
- Look at recent PRs for examples
