module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-es2015'),
    require('babel-preset-es2016'),
    require('babel-preset-es2017'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require("babel-plugin-transform-strict-mode")
  ]
};
