const { ignorePatterns, project } = require('./base');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['prettier', 'turbo'],
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
  },
  settings: {
    'import/resolver': {
      typescript: { project },
    },
  },
  ignorePatterns,
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
