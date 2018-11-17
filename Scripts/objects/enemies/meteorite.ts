module objects {
    export class Meteorite extends objects.Enemy {
        private _verticalSpeed:number;


        constructor() {
            super("meteorite");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
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
            super.Update();
        }
        public Reset(): void {
            this._verticalSpeed = config.Constants.verticalPlaySpeed;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            super.Reset();
        }
        public Destroy(): void {
            
        }


    }
}