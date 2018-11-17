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
    var PowerUp = /** @class */ (function (_super) {
        __extends(PowerUp, _super);
        function PowerUp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PowerUp.prototype, "IsInPlay", {
            get: function () {
                return this._isInPlay;
            },
            set: function (newState) {
                this._isInPlay = newState;
                if (!this._isInPlay) {
                    this.Reset();
                }
            },
            enumerable: true,
            configurable: true
        });
        return PowerUp;
    }(objects.Actor));
    objects.PowerUp = PowerUp;
})(objects || (objects = {}));
//# sourceMappingURL=powerUp.js.map