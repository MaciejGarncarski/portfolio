/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: "none",
  singleQuote: false,
  printWidth: 80,
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
