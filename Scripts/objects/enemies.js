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
    var Enemies = /** @class */ (function (_super) {
        __extends(Enemies, _super);
        // public properties
        // constructor
        function Enemies() {
            var _this = _super.call(this, "enemies") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemies.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Enemies.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
            if ((createjs.Ticker.getTicks() % 20 == 0) && (this.y > 0)) {
                managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
            }
        };
        // public methods
        Enemies.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 2) + 6);
            this.y = -this.Height * 20; // Math.floor((Math.random() * 10) + 5);
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        };
        Enemies.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._bulletSpawn = new util.Vector2(0, 5 + this.HalfHeight);
            this.Reset();
        };
        Enemies.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Enemies.prototype.Destroy = function () {
        };
        return Enemies;
    }(objects.GameObject));
    objects.Enemies = Enemies;
})(objects || (objects = {}));
//# sourceMappingURL=enemies.js.map