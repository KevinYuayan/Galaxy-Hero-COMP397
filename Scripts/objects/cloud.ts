module objects {
    export class Cloud extends objects.gameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("cloud");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height){
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
            this._verticalSpeed = Math.floor((Math.random()*5)+5); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
        }
        public Destroy(): void {
            
        }


    }
}