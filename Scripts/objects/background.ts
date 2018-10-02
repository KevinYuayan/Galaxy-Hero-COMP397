module objects{
    export class Background extends objects.gameObject{
        
        // private instance variables
        private _verticalSpeed:number;
        private _isMoving:boolean;

        // public properties

        // constructor
        /**
         *Creates an instance of Background.
         * @param {string} imageString
         * @param {number} [verticalSpeed=0]
         * @memberof Background
         */
        constructor(imageString:string, verticalSpeed:number = 0) {
            super(imageString);           
            this._verticalSpeed = verticalSpeed;
            if(this._verticalSpeed == 0)
            {
                this._isMoving = false;
            }
            else
            {
                this._isMoving = true;
            }
        }

        // private methods

        private _checkBounds():void {
            if(this.y >= 0){
                this.Reset();
            }
        }

        private _move():void {
            this.y += this._verticalSpeed;
        }

        // public methods

        public Start(): void {
            this.y = -this.Height + config.Constants.canvasHeight;
        }
        public Update(): void {
            if (this._isMoving) {
                this._move();
                this._checkBounds();
            }
        }
        public Reset(): void {
            this.y = -this.Height;
        }
        public Destroy(): void {

        }
    }
}