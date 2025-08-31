---
"@codeiqlabs/eslint-prettier-config": minor
---

Commit package-lock.json for improved dependency consistency

- Adopt modern best practice of committing package-lock.json for both applications and libraries
- Ensures consistent dependency resolution across all environments and contributors
- Improves reproducible builds and reduces dependency-related issues
- The advice to exclude lockfiles for libraries is outdated - modern practice is to commit lockfiles for all project types
- Package-lock.json is already tracked and will continue to be committed going forward

This change aligns with current npm and Node.js ecosystem best practices for dependency management.
