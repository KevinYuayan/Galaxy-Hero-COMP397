module objects {
    export class Button extends createjs.Bitmap {
        // private instance variables
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;

        // public properties
        get Width():number {
            return this._width;
        }

        set Width(newValue:number) {
            this._width = newValue;
            this.HalfWidth = this._width * 0.5;
        }

        get Height():number {
            return this._height;
        }

        set Height(newValue:number) {
            this._height = newValue;
            this.HalfHeight = this._height * 0.5;
        }

        get HalfHeight():number {
            return this._halfHeight;
        }

        set HalfHeight(newValue:number) {
            this._halfHeight = newValue;
        }

        get HalfWidth():number {
            return this._halfWidth;
        }

        set HalfWidth(newValue:number) {
            this._halfWidth = newValue;
        }

        // constructor

        /**
         * Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imageString:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(managers.Game.assetManager.getResult(imageString));

            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;

            if(isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }

            this.x = x;
            this.y = y;

            // event listeners
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }
        
        // private methods

        // event handlers
        private _over(event:createjs.MouseEvent):void {
            this.alpha = 0.7; // 70% opacity
        }

        private _out(event:createjs.MouseEvent):void {
            this.alpha = 1.0 // 100% opacity
        }

        // public methods
    }
}