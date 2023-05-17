/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  bracketSameLine: true,
  tailwindConfig: './tailwind.config.cjs',
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-astro')
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
