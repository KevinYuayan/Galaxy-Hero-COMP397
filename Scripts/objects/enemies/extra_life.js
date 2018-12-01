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
    var ExtraLife = /** @class */ (function (_super) {
        __extends(ExtraLife, _super);
        function ExtraLife() {
            return _super.call(this, "life") || this;
        }
        // private methods
        ExtraLife.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        ExtraLife.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
        };
        // public methods
        ExtraLife.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.Reset();
        };
        ExtraLife.prototype.Update = function () {
            this._move();
            _super.prototype.Update.call(this);
            this._checkBounds();
        };
        ExtraLife.prototype.Reset = function () {
            this._verticalSpeed = config.Constants.verticalPlaySpeed;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
            _super.prototype.Reset.call(this);
        };
        ExtraLife.prototype.Destroy = function () {
        };
        return ExtraLife;
    }(objects.Enemy));
    objects.ExtraLife = ExtraLife;
})(objects || (objects = {}));
//# sourceMappingURL=extra_life.js.map