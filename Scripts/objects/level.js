var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        // constructor
        function Level() {
            var _this = _super.call(this) || this;
            // May cause issues with powerups
            managers.Game.currentLevel = _this;
            return _this;
        }
        Level.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Level;
    }(objects.Scene));
    objects.Level = Level;
})(objects || (objects = {}));
//# sourceMappingURL=level.js.map