const path = require('path');
const WebpackFabricatorAssemble = require('webpack-fabricator-assemble');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackFabricatorAssemble({
      logErrors: true,
      dest: 'dist',
      helpers: {
        // {{ default description "string of content used if description var is undefined" }}
        default: function defaultFn(...args) {
          return args.find(value => !!value);
        },
        // {{ concat str1 "string 2" }}
        concat: function concat(...args) {
          return args.slice(0, args.length - 1).join('');
        },
        // {{> (dynamicPartial name) }} ---- name = 'nameOfComponent'
        dynamicPartial: function dynamicPartial(name) {
          return name;
        },
        eq: function eq(v1, v2) {
          return v1 === v2;
        },
        ne: function ne(v1, v2) {
          return v1 !== v2;
        },
        and: function and(v1, v2) {
          return v1 && v2;
        },
        or: function or(v1, v2) {
          return v1 || v2;
        },
        not: function not(v1) {
          return !v1;
        },
        gte: function gte(a, b) {
          return +a >= +b;
        },
        lte: function lte(a, b) {
          return +a <= +b;
        },
        plus: function plus(a, b) {
          return +a + +b;
        },
        minus: function minus(a, b) {
          return +a - +b;
        },
        divide: function divide(a, b) {
          return +a / +b;
        },
        multiply: function multiply(a, b) {
          return +a * +b;
        },
        abs: function abs(a) {
          return Math.abs(a);
        },
        mod: function mod(a, b) {
          return +a % +b;
        },
      },
    })
  ]
};