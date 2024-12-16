const { ignorePatterns, project } = require('./base');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['prettier', 'turbo', 'plugin:tailwindcss/recommended'],
  plugins: ['only-warn'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  rules: {
    'semi': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-template': 'warn',
    'eqeqeq': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: { project },
    },
    'tailwindcss': {
      callees: ['clsx', 'cn', 'cva'],
      classRegex: '^(class|\\w+Class)Name$',
    },
  },
  ignorePatterns,
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
