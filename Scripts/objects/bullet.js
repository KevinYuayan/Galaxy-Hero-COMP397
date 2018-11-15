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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // Constructors
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Bullet.prototype, "Direction", {
            // public properties
            get: function () {
                return this._direction;
            },
            set: function (newDirection) {
                this._direction = newDirection;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "IsInPlay", {
            get: function () {
                return this._isInPlay;
            },
            set: function (newState) {
                this._isInPlay = newState;
                if (!this._isInPlay) {
                    this.Reset();
                }
                this._velocity = util.Vector2.Multiply(this.Direction, this._speed);
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        Bullet.prototype._move = function () {
            this._updatePosition();
            this.Position = util.Vector2.Add(this.Position, this._velocity);
            this.x = this.Position.x;
            this.y = this.Position.y;
        };
        Bullet.prototype._checkBounds = function () {
            if ((this.y > 480) || (this.y < 0)) {
                this.IsInPlay = false;
            }
        };
        // public methods
        Bullet.prototype.Reset = function () {
            this.x = -10000;
            this.y = -10000;
            this.Direction = util.Vector2.zero();
        };
        Bullet.prototype.Start = function () {
            this._speed = 15;
            this.IsInPlay = false;
        };
        Bullet.prototype.Update = function () {
            if (this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        };
        Bullet.prototype.Destroy = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map