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
        function Explosion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // public properties
        // constructor
        /*constructor() {
            super("coin");

            this.Start();
        }*/
        // private methods
        Explosion.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Explosion.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Explosion.prototype.Reset = function () {
            this.IsColliding = false;
        };
        Explosion.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Explosion.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Explosion.prototype.Destroy = function () {
        };
        return Explosion;
    }(objects.SpriteGameObject));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map