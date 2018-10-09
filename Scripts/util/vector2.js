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
var util;
(function (util) {
    var Vector2 = /** @class */ (function (_super) {
        __extends(Vector2, _super);
        // private instance variables
        // public properties
        // constructor
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        // private methods
        // public methods
        /**
         * This method returns the Euclidean Distance between vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {number}
         */
        Vector2.Distance = function (vec1, vec2) {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        };
        /**
         * This method returns the resultant vector when adding vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         */
        Vector2.Add = function (vec1, vec2) {
            var result = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        };
        /**
         * This method subtracts vec2 from vec1 and returns a Vector2 result
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         */
        Vector2.Subtract = function (vec1, vec2) {
            var result = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        };
        return Vector2;
    }(createjs.Point));
    util.Vector2 = Vector2;
})(util || (util = {}));
//# sourceMappingURL=vector2.js.map