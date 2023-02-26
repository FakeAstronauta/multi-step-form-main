module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // this option is not added by default
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
