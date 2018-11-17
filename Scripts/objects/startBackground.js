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
    var StartBackground = /** @class */ (function (_super) {
        __extends(StartBackground, _super);
        // public properties
        // constructor
        function StartBackground() {
            var _this = _super.call(this, "startBackground") || this;
            _this.Start();
            return _this;
        }
        // private methods
        StartBackground.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        StartBackground.prototype._move = function () {
        };
        // public methods
        StartBackground.prototype.Reset = function () {
        };
        StartBackground.prototype.Start = function () {
            this.Reset();
        };
        StartBackground.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        StartBackground.prototype.Destroy = function () {
        };
        return StartBackground;
    }(objects.GameObject));
    objects.StartBackground = StartBackground;
})(objects || (objects = {}));
//# sourceMappingURL=startBackground.js.map