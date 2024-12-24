import pluginNext from '@next/eslint-plugin-next';
import baseConfig from './base.js';
import reactConfig from './react.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...baseConfig,
  ...reactConfig,
  // next config
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
];

export default config;
