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
    var Bomb = /** @class */ (function (_super) {
        __extends(Bomb, _super);
        // constructors
        function Bomb() {
            return _super.call(this, "bomb") || this;
        }
        Object.defineProperty(Bomb.prototype, "Collided", {
            // public variables
            get: function () {
                return this._collided;
            },
            set: function (newValue) {
                this._collided = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        Bomb.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        Bomb.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Destroy();
            }
        };
        // public methods
        // Adds a bomb to player when picked up. Max 3 bombs
        Bomb.prototype.Collected = function () {
            if (managers.Game.scoreBoard.Bombs < 4) {
                managers.Game.scoreBoard.Bombs += 1;
            }
            this.Collided = true;
            return this.Collided;
        };
        Bomb.prototype.Start = function () {
            this.Reset();
            _super.prototype.Start.call(this);
        };
        Bomb.prototype.Update = function () {
            this._move();
            this._checkBounds();
            _super.prototype.Update.call(this);
        };
        Bomb.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 2) + 2); // speed from 2 to 4
            this.destroyed = false;
            _super.prototype.Reset.call(this);
        };
        Bomb.prototype.Destroy = function () {
            this.destroyed = true;
        };
        return Bomb;
    }(objects.PowerUp));
    objects.Bomb = Bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map