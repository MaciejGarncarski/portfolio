/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  bracketSameLine: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
