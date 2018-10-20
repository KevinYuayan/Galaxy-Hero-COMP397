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
            // adds restartButton to the stage
            this.addChild(this._restartButton);
            // adds player to the stage
            this.addChild(this._gameOverLabel);
            // event listeners
            // starts the play scene
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        Over.prototype.Start = function () {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._background = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this.Main();
        };
        Over.prototype.Update = function () {
            this._background.Update();
        };
        Over.prototype.Reset = function () {
            throw new Error("Method not implemented.");
        };
        Over.prototype.Destroy = function () {
            _super.prototype.Destroy.call(this);
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map