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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // constructors
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Player.prototype, "BulletSpawn", {
            // public properties
            get: function () {
                return this._bulletSpawn;
            },
            set: function (newSpawnPoint) {
                this._bulletSpawn = newSpawnPoint;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = 435;
            _super.prototype.Start.call(this);
        };
        Player.prototype.Update = function () {
            this.x = managers.Game.stage.mouseX;
            this._updatePosition();
            if (this.x > config.Constants.canvasWidth - this.HalfWidth) {
                this.x = config.Constants.canvasWidth - this.HalfWidth;
            }
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            _super.prototype.Update.call(this);
        };
        Player.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.Actor));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map