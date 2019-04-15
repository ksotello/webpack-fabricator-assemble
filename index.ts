const fabAssemble = require('fabricator-assemble');

interface FabricatorOptions {
  dest?: string,
  layout?: string;
  layouts?: string[];
  layoutIncludes?: string[];
  views?: string[];
  materials?: string[];
  data?: string[];
  docs?: string[];
  keys?: object;
  helpers?: object;
  logErrors?: boolean;
  onError?: any;
	baseUrl?: string,
}

// A JavaScript class.
module.exports = (HtmlWebpackPlugin => {
  return class WebpackFabricatorAssembly {
    private options: FabricatorOptions;
  
    constructor(options: FabricatorOptions) {
      this.options = options;
    }
  
    apply(compiler) {
      compiler.hooks.compilation.tap(
        'WebpackFabricatorAssembly',
        (compilation, callback) => {
          fabAssemble(this.options);
          HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks(compilation).afterEmit.tapAsync(
            'WebpackFabricatorAssembly',
            (data, cb) => {
              cb(null, data)
            }
          );
        }
      );
    }
  }
});
