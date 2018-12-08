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
    var Intermission = /** @class */ (function (_super) {
        __extends(Intermission, _super);
        //public properties
        //constructor
        function Intermission() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Intermission.prototype.Start = function () {
            this._background = new objects.Background("instructionsBackground");
            this._nextButton = new objects.Button("startButton", 320, 420, true);
            this._nextLabel = new objects.Label("Enter the next Level when you're ready...", "20px", "Consolas", "#FFFF00", 80, 330, false, 350);
            this._loading = new objects.BitmapGameObject("loading");
            this._loading.x = 305;
            this._loading.y = 210;
            switch (managers.Game.scoreBoard.Level) {
                case 2:
                    this._waitLabel = new objects.Label("Time to kick it up a notch !", "20px", "Consolas", "#FFFF00", 170, 130, false, 350);
                    // managers.Game.scoreBoard.Level = 2;
                    // setInterval(this.setToLevel2,5000);
                    break;
                case 3:
                    this._waitLabel = new objects.Label("Welcome to Hell !", "20px", "Consolas", "#FFFF00", 170, 130, false, 350);
                    // managers.Game.scoreBoard.Level = 3;
                    // setInterval(this.setToLevel3,5000);
                    break;
            }
            this.Main();
        };
        Intermission.prototype.Update = function () {
            // throw new Error("Method not implemented.");
        };
        Intermission.prototype.Reset = function () {
            // throw new Error("Method not implemented.");
        };
        Intermission.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Intermission.prototype.Main = function () {
            //adds objects to the stage
            this.addChild(this._background);
            this.addChild(this._waitLabel);
            this.addChild(this._nextLabel);
            this.addChild(this._nextButton);
            this.addChild(this._loading);
            switch (managers.Game.scoreBoard.Level) {
                case 2:
                    // managers.Game.scoreBoard.Level = 2;
                    // setInterval(this.setToLevel2,5000);
                    this._nextButton.on("click", function () {
                        managers.Game.currentState = config.Scene.LEVEL2;
                    });
                    break;
                case 3:
                    this._nextButton.on("click", function () {
                        managers.Game.currentState = config.Scene.LEVEL3;
                    });
                    // managers.Game.scoreBoard.Level = 3;
                    // setInterval(this.setToLevel3,5000);
                    break;
            }
        };
        return Intermission;
    }(objects.Scene));
    scenes.Intermission = Intermission;
})(scenes || (scenes = {}));
//# sourceMappingURL=intermission.js.map