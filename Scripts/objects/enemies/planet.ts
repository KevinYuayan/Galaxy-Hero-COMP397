module objects {
    export class Planet extends objects.Enemy {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("planet");

        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            super.Start();
            this.Reset();
        }
        public Update(): void {
            this._move();
            super.Update();
            this._checkBounds();
        }
        public Reset(): void {
            super.Reset();
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        }
        public Destroy(): void {
            
        }


    }
}