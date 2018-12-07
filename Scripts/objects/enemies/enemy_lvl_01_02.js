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
    var Water = /** @class */ (function (_super) {
        __extends(Water, _super);
        function Water() {
            return _super.call(this, "water") || this;
        }
        // private methods
        Water.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Water.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Water.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.Reset();
        };
        Water.prototype.Update = function () {
            this._move();
            _super.prototype.Update.call(this);
            this._checkBounds();
        };
        Water.prototype.Reset = function () {
            this._verticalSpeed = config.Constants.verticalPlaySpeed;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
            _super.prototype.Reset.call(this);
        };
        Water.prototype.Destroy = function () {
        };
        return Water;
    }(objects.Enemy));
    objects.Water = Water;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_lvl_01_02.js.map