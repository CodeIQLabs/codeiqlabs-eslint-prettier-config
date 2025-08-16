// prettier.config.js
/** Central Prettier config for CodeIQLabs projects */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  arrowParens: 'always',
  overrides: [
    { files: '*.md', options: { proseWrap: 'always' } },
    { files: ['*.yml', '*.yaml'], options: { singleQuote: false } },
  ],
};
