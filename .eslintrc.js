module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    createDefaultProgram: true
  },
  ignorePatterns: ['*.d.ts'],
  extends: ["@wishket/eslint-config-wishket"],
  root: true,
  env: {
    node: true,
    browser: true
  },
  globals: {
    document: false,
    Map: false,
    Promise: false
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    },
    'import/ignore': ['testing-utils']
  }
}
