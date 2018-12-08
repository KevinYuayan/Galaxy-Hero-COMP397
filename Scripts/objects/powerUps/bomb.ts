module objects {
    export class Bomb extends objects.PowerUp{
        
        // private variables
        private _verticalSpeed:number;

        // public variables
        
        // constructors

        constructor() {
            super("bomb");

            this.Start();
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

        // Adds a bomb to player when picked up. Max 3 bombs
        public Collected(): void {
            if(managers.Game.scoreBoard.Bombs < 3) {
                managers.Game.scoreBoard.Bombs += 1;
            }
            this.IsInPlay = false;
        }
        

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
            this.x = -10000;
            this.y = -10000;
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 2 to 4
            super.Reset();
        }
        public Destroy(): void {
        }
    }
}