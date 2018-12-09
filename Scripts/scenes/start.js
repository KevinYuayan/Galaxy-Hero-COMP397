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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // public properties
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._background);
            this.addChild(this._panel);
            // adds ocean to the stage
            this.addChild(this._startButton);
            this.addChild(this._instructionsButton);
            // adds player to the stage
            this.addChild(this._welcomeLabel);
            // event listeners
            // starts the play scene
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.LEVEL1;
            });
            this._instructionsButton.on("click", function () {
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            });
        };
        Start.prototype.Start = function () {
            // Instantiates objects
            this._instructionsButton = new objects.Button("instructionsButton", 780, 380, true);
            this._startButton = new objects.Button("startButton", 780, 215, true);
            this._background = new objects.Background("startBackground");
            this._welcomeLabel = new objects.Label("Galaxy Hero", "35px", "planet", "#FFFF00", 780, 80, true);
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            var _startSound = createjs.Sound.play("lg_powerup");
            // _startSound.volume = 0.3;
            this.SetupInput();
            this.Main();
        };
        Start.prototype.SetupInput = function () {
            document.addEventListener("keydown", managers.Input.EnterPress);
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map