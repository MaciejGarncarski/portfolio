// @ts-check
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      "astro.config.mjs",
      "node_modules",
      "dist",
      ".git",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      "commitlint.config.cjs",
      "prettier.config.cjs"
    ]
  },
  {
    files: ["*.astro", "*.js", "*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": simpleImportSort
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    },
    rules: {
      "no-console": "error",
      "astro/no-set-html-directive": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error"
    }
  }
);
