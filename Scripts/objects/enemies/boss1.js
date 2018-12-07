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
    var Boss1 = /** @class */ (function (_super) {
        __extends(Boss1, _super);
        // constructors
        function Boss1() {
            return _super.call(this, "boss1") || this;
        }
        // private methods
        Boss1.prototype._move = function () {
            this.x += this._horizontalSpeed;
            if (this._horizontalSpeed == 0) {
                this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            }
            this._updatePosition();
        };
        Boss1.prototype._checkBounds = function () {
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
            if (managers.Game.scoreBoard.Level == 3) {
                //if((createjs.Ticker.getTicks() % 60 == 0) && (this.y > 0)) {
                if ((Math.random() < 0.17) && (this.y > 0)) {
                    managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                }
            }
        };
        // public methods
        Boss1.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._bulletSpawn = new util.Vector2(0, 2 + this.HalfHeight);
            this.y = this.HalfHeight;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.Reset();
        };
        Boss1.prototype.Update = function () {
            this._move();
            _super.prototype.Update.call(this);
            this._checkBounds();
        };
        Boss1.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this._verticalSpeed = Math.floor((Math.random() * 4) + 6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            this.IsColliding = false;
        };
        Boss1.prototype.Destroy = function () {
        };
        return Boss1;
    }(objects.Enemy));
    objects.Boss1 = Boss1;
})(objects || (objects = {}));
//# sourceMappingURL=boss1.js.map