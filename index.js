var fabAssemble = require('fabricator-assemble');
// A JavaScript class.
var WebpackFabricatorAssembly = /** @class */ (function () {
    function WebpackFabricatorAssembly(options) {
        this.options = options;
    }
    WebpackFabricatorAssembly.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.beforeCompile.tapAsync('WebpackFabricatorAssembly', function (compilation, callback) {
            fabAssemble(_this.options);
            callback();
        });
    };
    return WebpackFabricatorAssembly;
}());
module.exports = WebpackFabricatorAssembly;
