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
    var SpriteGameObject = /** @class */ (function (_super) {
        __extends(SpriteGameObject, _super);
        function SpriteGameObject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SpriteGameObject.prototype, "Width", {
            // public properties
            get: function () {
                return this._width;
            },
            set: function (newValue) {
                this._width = newValue;
                this.HalfWidth = this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newValue) {
                this._height = newValue;
                this.HalfHeight = this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "HalfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newValue) {
                this._halfHeight = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newValue) {
                this._halfWidth = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "IsColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newValue) {
                this._isColliding = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // constructors
        /*constructor(imageString:string) {
            super(managers.Game.textureMap, imageString);

            this.name = imageString;
            this._initialize();
        }*/
        // private methods
        SpriteGameObject.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Position = new util.Vector2(this.x, this.y);
            this.IsColliding = false;
        };
        SpriteGameObject.prototype._updatePosition = function () {
            this.Position.x = this.x;
            this.Position.y = this.y;
        };
        return SpriteGameObject;
    }(createjs.Sprite));
    objects.SpriteGameObject = SpriteGameObject;
})(objects || (objects = {}));
//# sourceMappingURL=spritegameobject.js.map