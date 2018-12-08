module objects {
    export class Water extends objects.Enemy {
        private _verticalSpeed:number;


        constructor() {
            super("water");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
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
            this._verticalSpeed = config.Constants.verticalPlaySpeed;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
            super.Reset();
        }
        public Destroy(): void {
            
        }


    }
}