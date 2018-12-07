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
        Player.prototype.Move = function () {
            // this.x = managers.Game.stage.mouseX;
            var direction = (this.rotation - 90) * -1;
            var degToRad = Math.PI / 180.0;
            // standard movement for top scroller - left and right
            if (managers.Input.moveRight) {
                this.x += 10;
            }
            if (managers.Input.moveLeft) {
                this.x -= 10;
            }
            // standard movement - forward - back
            if (managers.Input.moveForward) {
                this.y -= 5;
            }
            if (managers.Input.moveBackward) {
                this.y += 5;
            }
            /* move in direction that player is facing */
            /*
            if(managers.Input.moveForward) {
                this.x += 5 * Math.cos(direction * (degToRad));
                this.y -= 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveBackward) {
                this.x -= 5 * Math.cos(direction * (degToRad));
                this.y += 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveLeft) {
                this.rotation -= 5;
            }

            if(managers.Input.moveRight) {
                this.rotation += 5;
            }
            */
            /* gamepad controls
            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] > 0) {
                this.x += 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] < 0) {
                this.x -= 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] > 0) {
                this.y += 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] < 0) {
                this.y -= 5;
            }
            */
        };
        // public Fire() {
        //     managers.Game.bulletManager.FireBullet(this.BulletSpawn, util.Vector2.up(),this);
        // }
        Player.prototype.Fire = function () {
            if (managers.Input.space) {
                if (createjs.Ticker.getTicks() % 5 == 0) {
                    managers.Game.bulletManager.FireBullet(this.BulletSpawn, util.Vector2.up(), this);
                }
            }
        };
        Player.prototype.chkBounds = function () {
            if (this.x > config.Constants.canvasWidth - this.HalfWidth) {
                this.x = config.Constants.canvasWidth - this.HalfWidth;
            }
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            // if(this.y > config.Constants.canvasHeight + this.Height){
            if (this.y > 435) {
                this.y = 435;
            }
            if (this.y < (config.Constants.canvasHeight / 2)) {
                this.y = (config.Constants.canvasHeight / 2);
            }
        };
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            // this.IsEnemy = false;
            this.y = 435;
            this.x = 320;
            _super.prototype.Start.call(this);
        };
        Player.prototype.Update = function () {
            this.Move();
            this.Fire();
            _super.prototype.Update.call(this);
            this.BulletSpawn = new util.Vector2(this.x - 12, this.y - this.HalfHeight - 19);
            this.chkBounds();
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