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
var scenes;
(function (scenes) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        // public properties
        // constructors
        function Level3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Level3.prototype.Main = function () {
            var _this = this;
            // adds backgrounds to the stage
            for (var count = 0; count < this._backgroundNum; count++) {
                this.addChild(this._backgrounds[count]);
            }
            // adds meteorite to the scene
            this.addChild(this._meteorite);
            // adds player to the stage
            this.addChild(this._player);
            this.addChild(this._shockwave.shockwaveShape);
            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // adds powerUps to the scene
            this._powerUpManager.PowerUps.forEach(function (powerUp) {
                _this.addChild(powerUp);
            });
            // adds planets to the scene
            for (var count = 0; count < this._planetNum; count++) {
                this.addChild(this._planets[count]);
            }
            //adds enemies to the scene
            for (var count = 0; count < this._enemiesNum_03_01; count++) {
                this.addChild(this._enemy_03_01[count]);
            }
            for (var count = 0; count < this._enemiesNum_03_02; count++) {
                this.addChild(this._enemy_03_02[count]);
            }
            this.addChild(this._boss);
            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard.AddGameUI(this);
        };
        Level3.prototype.Start = function () {
            // managers.Game.scoreBoard.Reset();
            managers.Game.scoreBoard.Level += 1;
            this._backgroundNum = 2;
            this._enemiesNum_03_01 = 3;
            this._enemiesNum_03_02 = 1;
            // instantiates background array
            this._backgrounds = new Array();
            // creates 2 backgrounds to have an infinte scroller
            for (var count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("alienBackground", config.Constants.verticalPlaySpeed);
            }
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();
            this._meteorite = new objects.Meteorite();
            this._boss = new objects.Boss();
            this._player = new objects.Player();
            managers.Game.player = this._player;
            this._shockwave = new objects.Shockwave();
            managers.Game.shockwave = this._shockwave;
            // must do this to instantiate the array
            this._planets = new Array();
            this._enemy_03_01 = new Array();
            for (var count = 0; count < this._enemiesNum_03_01; count++) {
                this._enemy_03_01[count] = new objects.EnemyLvl03_01();
            }
            this._enemy_03_02 = new Array();
            for (var count = 0; count < this._enemiesNum_03_02; count++) {
                this._enemy_03_02[count] = new objects.EnemyLvl03_02();
            }
            this._engineSound = createjs.Sound.play("spaceship");
            this._engineSound.volume = 0.3;
            this._engineSound.loop = -1;
            // instantiates a new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;
            // instantiates a new powerUp manager
            this._powerUpManager = new managers.PowerUps();
            managers.Game.powerUpManager = this._powerUpManager;
            this.SetupInput();
            this.Main();
        };
        Level3.prototype.SetupInput = function () {
            this.on("mousedown", managers.Input.OnLeftMouseDown);
            document.addEventListener("keydown", managers.Input.KeyPressed);
            //this.on("keydown", managers.Input.KeyPressed);
        };
        Level3.prototype.Update = function () {
            var _this = this;
            this._player.Update();
            this._shockwave.Update();
            this._meteorite.Update();
            managers.Collision.Check(this._player, this._meteorite);
            this._boss.Update();
            managers.Collision.Check(this._player, this._boss);
            // updates each enemy in array
            this._enemy_03_01.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this._player, enemy);
            });
            this._enemy_03_02.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this._player, enemy);
            });
            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(_this._shockwave, bullet);
                managers.Collision.Check(_this._player, bullet);
                _this._enemy_03_01.forEach(function (enemy) {
                    managers.Collision.Check(bullet, enemy);
                });
                _this._enemy_03_02.forEach(function (enemy) {
                    managers.Collision.Check(bullet, enemy);
                });
            });
            this._powerUpManager.Update();
            this._powerUpManager.PowerUps.forEach(function (powerUp) {
                managers.Collision.Check(_this._player, powerUp);
            });
            // updates background 0
            if (this._backgrounds[1].y >= 0 || this._backgrounds[1].y <= config.Constants.canvasHeight - this._backgrounds[1].Height) {
                this._backgrounds[0].Update();
            }
            // updates background 1
            if (this._backgrounds[0].y >= 0 || this._backgrounds[0].y <= config.Constants.canvasHeight - this._backgrounds[0].Height) {
                this._backgrounds[1].Update();
            }
        };
        Level3.prototype.Reset = function () { };
        Level3.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
            this.off("mousedown", managers.Input.OnLeftMouseDown);
            document.removeEventListener("keydown", managers.Input.KeyPressed);
        };
        return Level3;
    }(objects.Level));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map