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
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructors
        function Over() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Over.prototype.Main = function () {
            // adds background to the stage
            this.addChild(this._background);
            this.addChild(this._panel);
            // adds restartButton to the stage
            this.addChild(this._restartButton);
            // adds player to the stage
            this.addChild(this._gameOverLabel);
            // event listeners
            // starts the play scene
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.LEVEL1;
            });
        };
        Over.prototype.Start = function () {
            // Instantiates objects
            managers.Game.scoreBoard.Reset();
            this._restartButton = new objects.Button("restartButton", 780, 360, true);
            this._background = new objects.Background("spaceBackground", 0);
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 780, 240, true);
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this.Main();
        };
        Over.prototype.Update = function () {
            this._background.Update();
        };
        Over.prototype.Reset = function () {
            throw new Error("Method not implemented.");
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map