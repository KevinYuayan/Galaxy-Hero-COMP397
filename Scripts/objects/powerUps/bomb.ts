module objects {
    export class Bomb extends objects.PowerUp{
        
        // private variables
        private _verticalSpeed:number;
        private _collided: boolean;

        // public variables

        get Collided():boolean {
            return this._collided;
        }

        set Collided(newValue:boolean) {
            this._collided = newValue;
        }

        // constructors

        constructor() {
            super("bomb"); //TODO add bomb to imgs
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Destroy();
            }
        }

        // public methods

        // Adds a bomb to player when picked up. Max 3 bombs
        public Collected(): boolean {
            if(managers.Game.scoreBoard.Bombs < 4) {
                managers.Game.scoreBoard.Bombs += 1;
            }
            this.Collided = true;
            return this.Collided;
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
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 2 to 4
            this.destroyed = false;
            super.Reset();
        }
        public Destroy(): void {
            this.destroyed = true;
        }
    }
}