var managers;
(function (managers) {
    var GamePad = /** @class */ (function () {
        // CONSTRUCTOR
        function GamePad(gamePadIndex) {
            this.Axis = new Array();
            this.Buttons = new Array();
            this._gamepadIndex = gamePadIndex;
        }
        Object.defineProperty(GamePad.prototype, "Buttons", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._buttons;
            },
            set: function (newButtonsArray) {
                this._buttons = newButtonsArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GamePad.prototype, "Axis", {
            get: function () {
                return this._axis;
            },
            set: function (newAxisArray) {
                this._axis = newAxisArray;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        // PUBLIC METHODS
        GamePad.prototype.Update = function () {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if (this._gamepad) { // is the gamepad connected?
                // check Buttons
                for (var index = 0; index < this._gamepad.buttons.length; index++) {
                    if (this._gamepad.buttons[index].pressed) {
                        console.log("button " + index + " pressed");
                        this.Buttons[index] = true;
                    }
                    else {
                        this.Buttons[index] = false;
                    }
                }
                // check Axes
                for (var index = 0; index < this._gamepad.axes.length; index++) {
                    if ((this._gamepad.axes[index] > 0.2) || (this._gamepad.axes[index] < -0.2)) {
                        this.Axis[index] = this._gamepad.axes[index];
                        //console.log("Axis: " + index);
                        /*
                        if(index == config.Gamepad.HORIZONTAL) {
                            console.log("left stick - left and right");
                        }

                        if(index == config.Gamepad.VERTICAL) {
                            console.log("left stick - up and down");
                        }
                        */
                    }
                    else if ((this._gamepad.axes[index] > -0.2) && (this._gamepad.axes[index] < 0.2)) {
                        this.Axis[index] = 0; // dead zone
                    }
                } // end check Axes
            } // end check if gamepad is connected
        };
        return GamePad;
    }());
    managers.GamePad = GamePad;
})(managers || (managers = {}));
//# sourceMappingURL=gamepad.js.map