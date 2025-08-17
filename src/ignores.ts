export const ignores = [
  "**/dist/**",
  "**/build/**",
  "**/.next/**",
  "**/coverage/**",
  "**/.turbo/**",
  "**/.cache/**",
  "**/tmp/**"
] as const;

export type IgnoreGlobs = typeof ignores[number];
