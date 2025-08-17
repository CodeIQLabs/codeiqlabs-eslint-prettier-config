export const ignores = [
  '**/dist/**',
  '**/node_modules/**',
  '**/build/**',
  '**/.next/**',
  '**/coverage/**',
  '**/.turbo/**',
  '**/.cache/**',
  '**/tmp/**',
] as const;

export type IgnoreGlobs = (typeof ignores)[number];
