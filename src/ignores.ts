export const ignores = [
  '**/dist/**',
  '**/node_modules/**',
  '**/build/**',
  '**/.next/**',
  '**/coverage/**',
  '**/.turbo/**',
  '**/.cache/**',
  '**/tmp/**',
  '**/*.js', // Ignore compiled JavaScript files (CDK generates these)
] as const;

export type IgnoreGlobs = (typeof ignores)[number];
