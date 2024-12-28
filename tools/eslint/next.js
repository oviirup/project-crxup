import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import baseConfig from './base.js';
import reactConfig from './react.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // next.js plugin
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  ...baseConfig,
  ...reactConfig,
];

export default config;
