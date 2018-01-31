const {ignore} = require('@jetbrains/eslint-config/consts');

module.exports = {
  extends: [
    '@jetbrains',
    '@jetbrains/eslint-config/es6',
    '@jetbrains/eslint-config/node'
  ],
  rules: {
    'import/no-commonjs': ignore
  }
};
