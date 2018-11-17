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
        // public properties
        // constructor
        function Meteorite() {
            var _this = _super.call(this, "meteorite") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Meteorite.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        };
        Meteorite.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Meteorite.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5);
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        };
        Meteorite.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Meteorite.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Meteorite.prototype.Destroy = function () {
        };
        return Meteorite;
    }(objects.GameObject));
    objects.Meteorite = Meteorite;
})(objects || (objects = {}));
//# sourceMappingURL=meteorite.js.map