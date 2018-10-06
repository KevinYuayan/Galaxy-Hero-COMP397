module objects {
    export class Enemies extends objects.gameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("enemies");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random()*6)+6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
        }
        public Destroy(): void {
            
        }


    }
}