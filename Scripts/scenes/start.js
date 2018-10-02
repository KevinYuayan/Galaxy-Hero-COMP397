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
            // adds ocean to the stage
            this.addChild(this._startButton);
            // adds player to the stage
            this.addChild(this._welcomeLabel);
            // event listeners
            // starts the play scene
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        Start.prototype.Start = function () {
            // Instantiates objects
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this._background = new objects.Background("startBackground");
            this._welcomeLabel = new objects.Label("Galaxy Hero", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map