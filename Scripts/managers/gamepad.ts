module managers {
    export class GamePad {
        // PRIVATE INSTANCE VARIABLES
        private _gamepad: Gamepad;
        private _gamepadIndex: number;
        private _axis:number[];
        private _buttons:boolean[];

        // PUBLIC PROPERTIES
        get Buttons():boolean[] {
            return this._buttons;
        }

        set Buttons(newButtonsArray:boolean[]) {
            this._buttons = newButtonsArray;
        }

        get Axis():number[] {
            return this._axis;
        }

        set Axis(newAxisArray:number[]) {
            this._axis = newAxisArray;
        }

        // CONSTRUCTOR
        constructor(gamePadIndex:number) {
            this.Axis = new Array<number>(); 
            this.Buttons = new Array<boolean>();
            this._gamepadIndex = gamePadIndex;
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Update():void {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if(this._gamepad) { // is the gamepad connected?
                // check Buttons
                for(let index=0; index < this._gamepad.buttons.length; index++) {
                    
                    if(this._gamepad.buttons[index].pressed) {
                        console.log("button " + index + " pressed");
                        this.Buttons[index] = true;
                    }
                    else {
                        this.Buttons[index] = false;
                    }
                }

                // check Axes
                for(let index = 0; index < this._gamepad.axes.length; index++) {
                    if((this._gamepad.axes[index] > 0.2) || (this._gamepad.axes[index] < -0.2)) {
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
                    else if((this._gamepad.axes[index] > -0.2) && (this._gamepad.axes[index] < 0.2)) {
                        this.Axis[index] = 0 // dead zone
                    }
                } // end check Axes
            } // end check if gamepad is connected
        }


    }
}