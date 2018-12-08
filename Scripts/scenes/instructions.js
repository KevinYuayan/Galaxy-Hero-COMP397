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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // public properties
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._panel);
            this.addChild(this._player);
            this.addChild(this._playerlbl);
            this.addChild(this._bullet);
            this.addChild(this._enemy1);
            this.addChild(this._enemy2);
            this.addChild(this._enemy3);
            this.addChild(this._enemylbl);
            this.addChild(this._bomb);
            this.addChild(this._bomblbl);
            this.addChild(this._meteor1);
            this.addChild(this._meteor2);
            this.addChild(this._meteorlbl);
            // adds ocean to the stage
            this.addChild(this._backButton);
            // event listeners
            // starts the play scene
            this._backButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
        };
        Instructions.prototype.Start = function () {
            // Instantiates objects
            // TODO Change string when back button added
            this._backButton = new objects.Button("startButton", 320, 440, true);
            this._background = new objects.Background("instructionsBackground");
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this._player = new objects.BitmapGameObject("player");
            this._player.x = 20;
            this._player.y = 20;
            this._playerlbl = new objects.Label("Use your mouse to move your ship and left click to shoot", "20px", "Consolas", "#FFFF00", 80, 40, false, 350);
            this._bullet = new objects.BitmapGameObject("bullet");
            this._bullet.x = 50;
            this._bullet.y = 190;
            this._enemy1 = new objects.BitmapGameObject("enemyLvl01_01");
            this._enemy1.x = 100;
            this._enemy1.y = 160;
            this._enemy2 = new objects.BitmapGameObject("enemies");
            this._enemy2.x = 110;
            this._enemy2.y = 110;
            this._enemy3 = new objects.BitmapGameObject("enemyLvl03_01");
            this._enemy3.x = 30;
            this._enemy3.y = 110;
            this._enemylbl = new objects.Label("Colliding with enemies and bullets makes you lose a life", "20px", "Consolas", "#FFFF00", 170, 130, false, 350);
            this._bomb = new objects.BitmapGameObject("bomb");
            this._bomb.x = 40;
            this._bomb.y = 240;
            this._bomblbl = new objects.Label("Press B to use your bomb. Use your bomb to destroy enemy bullets.", "20px", "Consolas", "#FFFF00", 80, 230, false, 350);
            this._meteor1 = new objects.BitmapGameObject("meteorite");
            this._meteor1.x = 30;
            this._meteor1.y = 300;
            this._meteor2 = new objects.BitmapGameObject("water");
            this._meteor2.x = 130;
            this._meteor2.y = 300;
            this._meteorlbl = new objects.Label("Collect meteors and water to gain lives and points", "20px", "Consolas", "#FFFF00", 280, 330, false, 350);
            this.Main();
        };
        Instructions.prototype.Update = function () {
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map