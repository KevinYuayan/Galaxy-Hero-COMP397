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
    var Meteorite = /** @class */ (function (_super) {
        __extends(Meteorite, _super);
        function Meteorite() {
            return _super.call(this, "meteorite") || this;
        }
        // private methods
        Meteorite.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        Meteorite.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Meteorite.prototype.Start = function () {
            this.Reset();
            _super.prototype.Start.call(this);
        };
        Meteorite.prototype.Update = function () {
            this._move();
            this._checkBounds();
            _super.prototype.Update.call(this);
        };
        Meteorite.prototype.Reset = function () {
            this._verticalSpeed = config.Constants.verticalPlaySpeed;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            _super.prototype.Reset.call(this);
        };
        Meteorite.prototype.Destroy = function () {
        };
        return Meteorite;
    }(objects.Enemy));
    objects.Meteorite = Meteorite;
})(objects || (objects = {}));
//# sourceMappingURL=meteorite.js.map