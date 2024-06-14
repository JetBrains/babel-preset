/* eslint-disable complexity */
const MIN_BABEL_VERSION = 7;

const defaultAlwaysOnTransforms = ['@babel/plugin-proposal-nullish-coalescing-operator'];

module.exports = function preset(api, opts) {
  api.assertVersion(MIN_BABEL_VERSION);

  const transformRuntime = opts.transformRuntime || false;
  const useBuiltIns = opts.useBuiltIns || false;
  const angularSupport = opts.angular || false;
  const typeScript = opts.typeScript || false;
  const corejs = opts.corejs || '2';
  const reactConfig = opts.react;

  const envConfig = {
    useBuiltIns,
    include: angularSupport
      ? [...defaultAlwaysOnTransforms, 'transform-parameters'] // This fixes an issue with transforming Angular code like `constructor(...args)`
      : defaultAlwaysOnTransforms
  };

  if (useBuiltIns) {
    envConfig.corejs = corejs;
  }

  return {
    presets: [
      [require('@babel/preset-react'), reactConfig],
      [require('@babel/preset-env'), envConfig],
      typeScript
        ? [require('@babel/preset-typescript'), {allowDeclareFields: true}]
        : null
    ].filter(it => !!it),
    plugins: [
      require('@babel/plugin-transform-strict-mode'),

      // Optional transformations
      angularSupport ? require('babel-plugin-angularjs-annotate') : null,
      transformRuntime ? require('@babel/plugin-transform-runtime') : null
    ].filter(it => !!it)
  };
};
