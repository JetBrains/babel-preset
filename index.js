module.exports = {
  presets: [
    require('babel-preset-react'),
    [require('babel-preset-env'), {
      targets: {
        browsers: 'defaults'
      },
      modules: false
    }],
    require('babel-preset-stage-2')
  ],
  plugins: [
    require('babel-plugin-transform-strict-mode')
  ]
};
