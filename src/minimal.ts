import type { Linter } from "eslint";
import * as parser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import prettier from "eslint-config-prettier";
import { ignores } from "./ignores.js";

const minimal: Linter.FlatConfig[] = [
  { ignores: [...ignores] },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      globals: { ...globals.node, ...globals.es2024, ...globals.browser }
    },
    plugins: {
      "@typescript-eslint": tsPlugin as unknown as Linter.Plugin
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
      "no-var": "error"
    }
  },
  prettier as unknown as Linter.FlatConfig
];

export default minimal;
