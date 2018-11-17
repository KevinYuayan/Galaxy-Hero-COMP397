module objects {
    export class Boss extends objects.Enemy {
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
        }

        private _moveRight(){
            this.x -= this._horizontalSpeed;
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height){
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.Reset();
            super.Start();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
            if(this.x > 640 - this.HalfWidth){
                this.x = 640 - this.HalfWidth;
            }

            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
            }
            super.Update();
        }
        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = 10;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            super.Reset();
        }
        public Destroy(): void {
            
        }


    }
}