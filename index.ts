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
class WebpackFabricatorAssembly {
  private options: FabricatorOptions;

  constructor(options: FabricatorOptions) {
    this.options = options;
  }

  apply(compiler) {

    compiler.hooks.beforeCompile.tapAsync(
      'WebpackFabricatorAssembly',
      (compilation, callback) => {

        fabAssemble(this.options);        

        callback();
      }
    );
  }
}

module.exports = WebpackFabricatorAssembly;
