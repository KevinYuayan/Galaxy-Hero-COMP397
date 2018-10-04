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
    var Planet = /** @class */ (function (_super) {
        __extends(Planet, _super);
        // constructors
        function Planet() {
            return _super.call(this, "planet") || this;
        }
        // private methods
        Planet.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        };
        Planet.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Planet.prototype.Start = function () {
            this.Reset();
        };
        Planet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Planet.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 2) + 2); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
        };
        Planet.prototype.Destroy = function () {
        };
        return Planet;
    }(objects.gameObject));
    objects.Planet = Planet;
})(objects || (objects = {}));
//# sourceMappingURL=planet.js.map