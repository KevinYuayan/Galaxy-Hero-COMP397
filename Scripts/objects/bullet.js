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
            return _super.call(this, "bullet") || this;
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
                this._velocity = util.Vector2.Mulitply(this.Direction, this._speed);
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
            if ((this.y > (480 + this.HalfHeight)) || (this.y < -this.HalfHeight)) {
                this.IsInPlay = false;
                this.Reset();
            }
        };
        // public methods
        Bullet.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this.x = -1000;
            this.y = -1000;
            this._updatePosition();
            this.Direction = util.Vector2.zero();
        };
        Bullet.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this._speed = 5;
            this.IsInPlay = false;
        };
        Bullet.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        };
        Bullet.prototype.Destroy = function () {
        };
        return Bullet;
    }(objects.Actor));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map