module objects {
    export class Meteorite extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("meteorite");

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5);
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}