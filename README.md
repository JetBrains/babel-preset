# JetBrains preset for Babel 6

[![official JetBrains project](http://jb.gg/badges/official-flat-square.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)

This preset includes all plugins from the [official](https://babeljs.io/docs/plugins/#presets-official-presets) presets
`env` (with [`browserlist` defaults](https://github.com/ai/browserslist#queries) as target), `stage-2`, `react`,
and one extra plugin:
[`transform-strict-mode`](http://babeljs.io/docs/plugins/transform-strict-mode). `env` is used with `{modules: false}` option, because webpack 2 uses native imports for tree shaking.

**Note to maintainers**: to trigger publishing of the npm package append *\[Publish\]* to the commit message. For example:

*Tweaked the preset \[Publish\]* 

