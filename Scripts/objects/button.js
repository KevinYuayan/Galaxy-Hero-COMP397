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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // private instance variables
        // public properties
        // constructor
        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        function Button(imageString, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imageString) || this;
            if (isCentered) {
                _this.regX = _this.HalfWidth;
                _this.regY = _this.HalfHeight;
            }
            _this.x = x;
            _this.y = y;
            // event listeners
            _this.on("mouseover", _this._over);
            _this.on("mouseout", _this._out);
            return _this;
        }
        // private methods
        // event handlers
        Button.prototype._over = function (event) {
            this.alpha = 0.7; // 70% opacity
        };
        Button.prototype._out = function (event) {
            this.alpha = 1.0; // 100% opacity
        };
        // public methods
        Button.prototype.Start = function () {
        };
        Button.prototype.Update = function () {
        };
        Button.prototype.Reset = function () {
        };
        Button.prototype.Destroy = function () {
        };
        return Button;
    }(objects.GameObject));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map