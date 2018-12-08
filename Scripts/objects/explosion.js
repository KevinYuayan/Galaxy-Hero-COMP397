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
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        // public properties
        // constructor
        function Explosion() {
            var _this = _super.call(this, "explosion") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Explosion.prototype.Reset = function () {
        };
        Explosion.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        };
        Explosion.prototype.Update = function () {
        };
        Explosion.prototype.Destroy = function () {
            this.parent.removeChild(this);
        };
        return Explosion;
    }(objects.SpriteGameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map