# JetBrains preset for Babel 6

This preset includes all plugins from "official" presets `babel-preset-es2015`, `babel-preset-react`,
`babel-preset-stage-3`, `babel-preset-stage-2`, `babel-preset-stage-1`, `babel-preset-stage-0`,
a plugin `babel-plugin-transform-proto-to-assign` (in order to support IE9 and IE10) and three more plugins:
`babel-plugin-transform-runtime`, `babel-plugin-transform-strict-mode`
and finally `babel-plugin-add-module-exports` (for a babel5-style `module.exports` hack).

### `babel-runtime`
Note that `babel-plugin-transform-class-properties` doesn't work correctly along with
`babel-plugin-transform-proto-to-assign` and `babel-plugin-transform-runtime`,
so we need to use our very own patched version of `babel-runtime` package
on our projects with Babel 6 (as well as Babel 5 though).
