import js from '@eslint/js';
import config_prettier from 'eslint-config-prettier';
import plugin_onlyWarn from 'eslint-plugin-only-warn';
import plugin_turbo from 'eslint-plugin-turbo';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  config_prettier,
  // typescript plugin
  ...ts.configs.recommended,
  {
    rules: {
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // base rules
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'eqeqeq': 'warn',
    },
  },
  // turbo plugin
  {
    plugins: { turbo: plugin_turbo },
    rules: {
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
  // only-warn plugin
  {
    plugins: { onlyWarn: plugin_onlyWarn },
  },
  {
    ignores: ['dist/**'],
  },
];

export default config;
