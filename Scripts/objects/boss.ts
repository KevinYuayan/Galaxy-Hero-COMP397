module objects {
    export class Boss extends objects.GameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("boss");
        }

        // private methods
        private _move() {
            this.x += this._horizontalSpeed;

            if(this._horizontalSpeed == 0){
                this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            }
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.HalfHeight || this.y < -this.HalfHeight){
                this.Reset();
            }
            //checks for right boundary
            if(this.x > config.Constants.canvasWidth - this.HalfWidth){
                this.x = config.Constants.canvasWidth - this.HalfWidth
                this.Reset();
            }
            //checks for left boundary
            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
                this.Reset();
            }
        }


        // public methods
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = this.HalfHeight;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.Reset();
            //super.Start();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random()*4)+6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2

        }
        public Destroy(): void {
            
        }
    }
}