module.exports = {
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-strict-mode"),

    // stage-3
    require("babel-plugin-transform-async-to-generator"),
    require("babel-plugin-transform-exponentiation-operator"),

    // stage-2
    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-object-rest-spread"),

    // stage-1
    //require("babel-plugin-transform-class-constructor-call"), // deprecated
    require("babel-plugin-transform-class-properties"),
    //require("babel-plugin-transform-decorators"), // disabled
    require("babel-plugin-transform-export-extensions"),

    // stage-0
    require("babel-plugin-transform-do-expressions"),
    require("babel-plugin-transform-function-bind"),

    // es2015
    require("babel-plugin-transform-es2015-template-literals"),
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-function-name"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),
    [require("babel-plugin-transform-es2015-classes"), { loose: true }], // loose-mode needs to support an inheritance in IE
    require("babel-plugin-transform-es2015-object-super"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-duplicate-keys"),
    require("babel-plugin-transform-es2015-computed-properties"),
    require("babel-plugin-transform-es2015-for-of"),
    require("babel-plugin-transform-es2015-sticky-regex"),
    require("babel-plugin-transform-es2015-unicode-regex"),
    require("babel-plugin-check-es2015-constants"),
    require("babel-plugin-transform-es2015-spread"),
    require("babel-plugin-transform-es2015-parameters"),
    require("babel-plugin-transform-es2015-destructuring"),
    require("babel-plugin-transform-es2015-block-scoping"),
    require("babel-plugin-transform-es2015-typeof-symbol"),
    require("babel-plugin-transform-es2015-modules-commonjs"),
    [require("babel-plugin-transform-regenerator"), { async: false, asyncGenerators: false }],

    // react
    require("babel-plugin-transform-react-jsx"),
    //require("babel-plugin-transform-flow-strip-types"),
    //require("babel-plugin-syntax-flow"),
    require("babel-plugin-syntax-jsx"),
    require("babel-plugin-transform-react-display-name"),

    // < IE11
    require("babel-plugin-transform-runtime"),
    require("babel-plugin-transform-proto-to-assign")
  ]
};
