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
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        // constructors
        function Boss() {
            return _super.call(this, "boss") || this;
        }
        // private methods
        Boss.prototype._move = function () {
            this.x += this._horizontalSpeed;
            if (this._horizontalSpeed == 0) {
                this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            }
        };
        Boss.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.HalfHeight || this.y < -this.HalfHeight) {
                this.Reset();
            }
            //checks for right boundary
            if (this.x > config.Constants.canvasWidth - this.HalfWidth) {
                this.x = config.Constants.canvasWidth - this.HalfWidth;
                this.Reset();
            }
            //checks for left boundary
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
                this.Reset();
            }
        };
        // public methods
        Boss.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = this.HalfHeight;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.Reset();
            //super.Start();
        };
        Boss.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Boss.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 4) + 6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
        };
        Boss.prototype.Destroy = function () {
        };
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map