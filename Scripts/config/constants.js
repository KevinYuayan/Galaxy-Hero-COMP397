var config;
(function (config) {
    // Abstract class used to hold constant variables
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.verticalPlaySpeed = 5;
        Constants.canvasHeight = 480;
        Constants.canvasWidth = 640;
        return Constants;
    }());
    config.Constants = Constants;
})(config || (config = {}));
//# sourceMappingURL=constants.js.map