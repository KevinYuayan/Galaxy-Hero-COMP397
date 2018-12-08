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
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        // public properties
        // constructor
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @param {number} [verticalSpeed=0]
         * @memberof Background
         */
        function Board(imageString, verticalSpeed) {
            if (verticalSpeed === void 0) { verticalSpeed = 0; }
            var _this = _super.call(this, imageString) || this;
            _this._verticalSpeed = verticalSpeed;
            return _this;
        }
        // private methods
        Board.prototype._checkBounds = function () {
            if (this.y >= config.Constants.canvasHeight) {
                this.Reset();
            }
        };
        Board.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        // public methods
        Board.prototype.Start = function () {
            this.y = -this.Height + config.Constants.canvasHeight;
        };
        Board.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Board.prototype.Reset = function () {
            this.y = -this.Height + config.Constants.verticalPlaySpeed; //TODO: review this fix
        };
        Board.prototype.Destroy = function () {
        };
        return Board;
    }(objects.GameObject));
    objects.Board = Board;
})(objects || (objects = {}));
//# sourceMappingURL=board.js.map