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
    var Actor = /** @class */ (function (_super) {
        __extends(Actor, _super);
        // constructor
        function Actor(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Actor.prototype, "Position", {
            // public properties
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Actor.prototype, "IsColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newValue) {
                this._isColliding = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        Actor.prototype._updatePosition = function () {
            this.Position.x = this.x;
            this.Position.y = this.y;
        };
        // public methods
        Actor.prototype.Start = function () {
            this.Position = new util.Vector2(this.x, this.y);
            this.Reset();
        };
        Actor.prototype.Update = function () {
            this._updatePosition();
        };
        Actor.prototype.Reset = function () {
            this.IsColliding = false;
        };
        return Actor;
    }(objects.GameObject));
    objects.Actor = Actor;
})(objects || (objects = {}));
//# sourceMappingURL=actor.js.map