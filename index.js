const MIN_BABEL_VERSION = 7;

module.exports = function preset(api, opts) {
  api.assertVersion(MIN_BABEL_VERSION);

  const transformRuntime = opts.transformRuntime || false;
  const angularSupport = opts.angular || false;

  return {
    presets: [
      require('@babel/preset-react'),
      [require('@babel/preset-env'), {
        include: angularSupport
          ? ['transform-parameters'] // This fixes issue with transforming Angular code like `constructor(...args)`
          : []
      }]
    ],
    plugins: [
      require('@babel/plugin-transform-strict-mode'),

      // Non-standard transformations
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-optional-chaining'),

      /*
      By unknown reason preset-env doesn't transform rest spread like `const foo = {...bar.foo, test: 123}`
      Probably because of this issuehttps://github.com/babel/babel/issues/7215
       */
      require('@babel/plugin-proposal-object-rest-spread'),

      // Optional transformations
      angularSupport ? require('babel-plugin-angularjs-annotate') : null,
      transformRuntime ? require('@babel/plugin-transform-runtime') : null
    ].filter(it => !!it)
  };
};
