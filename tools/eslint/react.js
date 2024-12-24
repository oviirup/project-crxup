import plugin_react from 'eslint-plugin-react';
import plugin_reactHooks from 'eslint-plugin-react-hooks';
import plugin_tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import baseConfig from './base.js';

/** @type {import('eslint').Linter.Config} */
const config = [
  ...baseConfig,
  // react plugin
  plugin_react.configs.flat.recommended,
  {
    languageOptions: {
      ...plugin_react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  // react-hooks plugin
  {
    plugins: {
      'react-hooks': plugin_reactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...plugin_reactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default config;