var fabAssemble = require('fabricator-assemble');
// A JavaScript class.
module.exports = (function (HtmlWebpackPlugin) {
    return /** @class */ (function () {
        function WebpackFabricatorAssembly(options) {
            this.options = options;
        }
        WebpackFabricatorAssembly.prototype.apply = function (compiler) {
            var _this = this;
            compiler.hooks.compilation.tapAsync('WebpackFabricatorAssembly', function (compilation, callback) {
                HtmlWebpackPlugin ? HtmlWebpackPlugin.getHooks(compilation).afterEmit.tapAsync('WebpackFabricatorAssembly', function (data, cb) {
                    fabAssemble(_this.options);
                    cb(null, data);
                }) : fabAssemble(_this.options);
            });
        };
        return WebpackFabricatorAssembly;
    }());
});
