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
var objects;
(function (objects) {
    var Shockwave = /** @class */ (function (_super) {
        __extends(Shockwave, _super);
        function Shockwave() {
            var _this = _super.call(this, "shockwave") || this;
            _this.Start();
            _this._inPlay = false;
            return _this;
        }
        Object.defineProperty(Shockwave.prototype, "InPlay", {
            // public properties
            get: function () {
                return this._inPlay;
            },
            set: function (newValue) {
                if (this._inPlay != newValue) {
                    if (newValue == true) {
                        this.Position.x = managers.Game.player.Position.x;
                        this.Position.y = managers.Game.player.Position.y;
                        this.Reset();
                    }
                    else {
                        this.Position.y = -10000;
                        this.Position.x = -10000;
                    }
                    this._inPlay = newValue;
                }
            },
            enumerable: true,
            configurable: true
        });
        Shockwave.prototype.CircleGraphic = function () {
            this.shockwaveShape.graphics.clear();
            this.shockwaveShape.graphics.setStrokeStyle(1);
            this.shockwaveShape.graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));
            this.shockwaveShape.graphics.beginFill("blue");
        };
        Shockwave.prototype.Start = function () {
            this.shockwaveShape = new createjs.Shape();
            this.Position = new util.Vector2(-10000, -10000);
            this.Reset();
            this.shockwaveShape.alpha = 0.1;
        };
        Shockwave.prototype.Update = function () {
            this.shockwaveShape.x = this.Position.x;
            this.shockwaveShape.y = this.Position.y;
            this.x = this.Position.x;
            this.y = this.Position.y;
            if (this.InPlay) {
                this.Height += 8;
                this.CircleGraphic();
                this.shockwaveShape.graphics.drawCircle(0, 0, this.Height);
            }
        };
        Shockwave.prototype.Reset = function () {
            this.Height = 10;
        };
        Shockwave.prototype.Destroy = function () {
        };
        return Shockwave;
    }(objects.Actor));
    objects.Shockwave = Shockwave;
})(objects || (objects = {}));
//# sourceMappingURL=shockwave.js.map