declare module "eslint-config-prettier" {
  import type { Linter } from "eslint";
  const cfg: Linter.FlatConfig;
  export = cfg;
}

declare module "eslint-plugin-react" {
  import type { Linter } from "eslint";
  const plugin: Linter.Plugin;
  export = plugin;
}

declare module "eslint-plugin-react-hooks" {
  import type { Linter } from "eslint";
  const plugin: Linter.Plugin;
  export = plugin;
}

declare module "eslint" {
  namespace Linter {
    interface Plugin {}
    interface FlatConfig {
      [key: string]: unknown;
    }
  }
}
