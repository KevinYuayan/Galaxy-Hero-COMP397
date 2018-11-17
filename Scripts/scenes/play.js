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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // public properties
        // constructor
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._meteoriteNum = 1;
            // Instantiates a new Array container of Type objects.Cloud
            this._meteorites = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._meteoriteNum; count++) {
                this._meteorites[count] = new objects.Meteorite();
            }
            // play background engine sound when the level starts
            this._engineSound = createjs.Sound.play("spaceship");
            this._engineSound.volume = 0.1;
            this._engineSound.loop = -1; // loop forever
            // instantiates a new bullet manager
            this._bulletManager = new managers.BulletMNGR();
            managers.Game.bulletManager = this._bulletManager;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._bg.Update();
            this._player.Update();
            this._planet.Update();
            // check if player and island are colliding
            managers.Collision.Check(this._player, this._planet);
            // Update Each cloud in the Cloud Array
            this._meteorites.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.Check(_this._player, cloud);
            });
            this._enemy.Update();
            managers.Collision.Check(this._player, this._enemy);
            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(function (bullet) {
                managers.Collision.Check(_this._player, bullet);
            });
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
            // TODO: Clean up bullet manager
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            var _this = this;
            // adds bg to the scene
            this._bg = new objects.Background();
            this.addChild(this._bg);
            // adds planet to the scene
            this._planet = new objects.Planet();
            this.addChild(this._planet);
            this._enemy = new objects.Enemies();
            this.addChild(this._enemy);
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            // adds Each Cloud in the Cloud Array to the Scene
            this._meteorites.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add ScoreBoard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map