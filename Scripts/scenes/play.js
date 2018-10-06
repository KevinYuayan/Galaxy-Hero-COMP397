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
            // adds backgrounds to the stage
            for (var count = 0; count < this._backgroundNum; count++) {
                this.addChild(this._backgrounds[count]);
            }
            // adds meteorite to the scene
            this.addChild(this._meteorite);
            // adds player to the stage
            this.addChild(this._player);
            // adds planets to the scene
            for (var count = 0; count < this._planetNum; count++) {
                this.addChild(this._planets[count]);
            }
            //adds enemies to the scene
            for (var count = 0; count < this._enemiesNum; count++) {
                this.addChild(this._enemies[count]);
            }
            this.addChild(this._boss);
        };
        Play.prototype.Start = function () {
            this._planetNum = 1;
            this._backgroundNum = 2;
            this._enemiesNum = 4;
            // instantiates background array
            this._backgrounds = new Array();
            // creates 2 backgrounds to have an infinte scroller
            for (var count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            }
            this._currentBackgroundNum = 0;
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();
            this._meteorite = new objects.Meteorite();
            this._player = new objects.Player();
            this._boss = new objects.Boss();
            // must do this to instantiate the array
            this._planets = new Array();
            this._enemies = new Array();
            // adds planets to the array
            for (var count = 0; count < this._planetNum; count++) {
                this._planets[count] = new objects.Planet();
            }
            for (var count = 0; count < this._enemiesNum; count++) {
                this._enemies[count] = new objects.Enemies();
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            this._player.Update();
            this._meteorite.Update();
            this._boss.Update();
            // updates each planet in array
            for (var _i = 0, _a = this._planets; _i < _a.length; _i++) {
                var planet = _a[_i];
                planet.Update();
            }
            for (var _b = 0, _c = this._enemies; _b < _c.length; _b++) {
                var enemies = _c[_b];
                enemies.Update();
            }
            // updates background 0
            if (this._backgrounds[1].y >= 0 || this._backgrounds[1].y <= config.Constants.canvasHeight - this._backgrounds[1].Height) {
                this._backgrounds[0].Update();
            }
            // updates background 1
            if (this._backgrounds[0].y >= 0 || this._backgrounds[0].y <= config.Constants.canvasHeight - this._backgrounds[0].Height) {
                this._backgrounds[1].Update();
            }
            /* if (this._backgrounds[this._currentBackgroundNum].CheckBounds(){
                if(this._currentBackgroundNum == 0){
                    this._currentBackgroundNum++;
                }
                else{
                    this._currentBackgroundNum--;
                }
                this._backgrounds[this._currentBackgroundNum].Reset();
            } */
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