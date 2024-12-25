/// <reference types="vitest" />

import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathAliases = {
  '~': path.resolve(__dirname, 'src'),
};

export default defineConfig({
  test: {},
  resolve: { alias: pathAliases },
});
