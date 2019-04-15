[logo]: https://camo.githubusercontent.com/6145057cba38349646e2ed632605318edc181c6d/687474703a2f2f6662726374722e6769746875622e696f2f6173736574732f746f6f6c6b69742f696d616765732f6c6f676f2e737667 "Fabricator Logo"

# Webpack Fabricator Assemble

A webpack plugin for the [fabricator-assemble](https://github.com/fbrctr/fabricator-assemble "fabricator-assemble github page") module.

## How to install

`npm i --save-dev webpack-fabricator-assemble`

## Examples

### Without using the HtmlWebpackPlugin

```javascript
const path = require('path');
const WebpackFabricatorAssemble = require('webpack-fabricator-assemble');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackFabricatorAssemble()
  ]
};
```

### With using the HtmlWebpackPlugin

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackFabricatorAssemble = require('webpack-fabricator-assemble')(HtmlWebpackPlugin);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
```

## License

MIT © [ksotello](https://github.com/ksotello)
