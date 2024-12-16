const path = require('path');

module.exports.project = path.resolve(process.cwd(), 'tsconfig.json');

// prettier-ignore
module.exports.ignorePatterns = [
  // dot-files
  '.*.js', '.*.cjs',
  // test files
  '*.test.js', '*.test.ts',
  // build output
  '.next', 'dist', 'node_modules',
];
