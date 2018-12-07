module objects {
    export class Explosion extends objects.SpriteGameObject {
        
        // private instance variables
        private _verticalSpeed:number;

        // public properties

        // constructor
        /*constructor() {
            super("coin");

            this.Start();
        }*/

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height) {
                this.Reset();
            }
        }


        // public methods

        public Reset(): void {
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._verticalSpeed = 5;
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