module objects {
    export class Island extends objects.gameObject {
        private _verticalSpeed:number;


        constructor() {
            super("island");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
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
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
        }
        public Destroy(): void {
            
        }


    }
}