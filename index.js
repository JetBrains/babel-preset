module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-latest'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-strict-mode")
  ]
};
