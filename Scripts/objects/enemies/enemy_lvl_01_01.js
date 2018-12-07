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
    var EnemyLvl01_01 = /** @class */ (function (_super) {
        __extends(EnemyLvl01_01, _super);
        // constructors
        function EnemyLvl01_01() {
            return _super.call(this, "enemyLvl01_01") || this;
        }
        // private methods
        EnemyLvl01_01.prototype._move = function () {
            if (this.y > (config.Constants.canvasHeight * 0.5)) {
                this.y == 0;
            }
            else {
                this.y += this._verticalSpeed;
                this.x += this._horizontalSpeed;
            }
        };
        EnemyLvl01_01.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
            if (managers.Game.scoreBoard.Level == 2 || managers.Game.scoreBoard.Level == 3) {
                //if((createjs.Ticker.getTicks() % 60 == 0) && (this.y > 0)) {
                if ((Math.random() < 0.17) && (this.y > 0)) {
                    console.log(this + "fired a bullet");
                    managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                }
            }
        };
        // public methods
        EnemyLvl01_01.prototype.Start = function () {
            this.regX = this.HalfHeight;
            this.regY = this.HalfWidth;
            _super.prototype.Start.call(this);
            this._bulletSpawn = new util.Vector2(0, 2 + this.HalfHeight);
            this.Reset();
        };
        EnemyLvl01_01.prototype.Update = function () {
            this._move();
            _super.prototype.Update.call(this);
            this._checkBounds();
        };
        EnemyLvl01_01.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this._verticalSpeed = Math.floor((Math.random() * 2) + 4); // speed from 1 to 5
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        };
        EnemyLvl01_01.prototype.Destroy = function () {
        };
        return EnemyLvl01_01;
    }(objects.Enemy));
    objects.EnemyLvl01_01 = EnemyLvl01_01;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_lvl_01_01.js.map