var config;
(function (config) {
    // Abstract class used to hold constant variables
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.verticalPlaySpeed = 3;
        Constants.canvasHeight = 1280;
        Constants.canvasWidth = 640;
        return Constants;
    }());
    config.Constants = Constants;
})(config || (config = {}));
//# sourceMappingURL=constants.js.map