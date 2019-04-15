const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackFabricatorAssemble = require('webpack-fabricator-assemble')(HtmlWebpackPlugin);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/layouts/default.html'),
      filename: path.resolve(__dirname, 'dist/default.html'),
      inject: false
    }),
    new WebpackFabricatorAssemble({
      layouts: [path.resolve(__dirname, 'dist/default.html')],
    }),
  ]
};