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
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Main = function () {
            // adds background to the stage
            this.addChild(this._background);
            // adds island to the scene
            this.addChild(this._island);
            // adds player to the stage
            this.addChild(this._player);
            // adds clouds to the scene
            for (var count = 0; count < this._cloudNum; count++) {
                this.addChild(this._clouds[count]);
            }
        };
        Play.prototype.Start = function () {
            this._cloudNum = 3;
            this._background = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            this._island = new objects.Island();
            this._player = new objects.Player();
            // must do this to instantiate the array
            this._clouds = new Array();
            // adds clouds to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            this._player.Update();
            this._background.Update();
            this._island.Update();
            // updates each cloud in array
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                cloud.Update();
            }
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map