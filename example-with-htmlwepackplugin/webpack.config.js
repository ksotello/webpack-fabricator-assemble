const path = require('path');
const WebpackFabricatorAssemble = require('webpack-fabricator-assemble');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackFabricatorAssemble({
      baseUrl: 'localhost:1337/',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html')
    }),
  ]
};