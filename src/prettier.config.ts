// prettier.config.ts
/** Central Prettier config for CodeIQLabs projects */
import type { Config } from "prettier";

const config: Config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: "all",
  semi: true,
  arrowParens: "always",
  overrides: [
    { files: "*.md", options: { proseWrap: "always" } },
    { files: ["*.yml", "*.yaml"], options: { singleQuote: false } },
  ],
};

// Use CommonJS export for prettier compatibility
module.exports = config;
