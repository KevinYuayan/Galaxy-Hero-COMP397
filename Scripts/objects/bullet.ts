module objects {
    export class Bullet extends objects.Actor {
        // private instance variable
        private _speed:number;
        private _direction:util.Vector2;
        private _isInPlay:boolean;
        private _velocity:util.Vector2;
        // private _isEnemyFired: boolean;

        // public properties
        get Direction():util.Vector2 {
            return this._direction;
        }

        set Direction(newDirection:util.Vector2) {
            this._direction = newDirection;
        }

        get IsInPlay():boolean {
            return this._isInPlay;
        }

        set IsInPlay(newState:boolean) {
            this._isInPlay = newState; 
            if(!this._isInPlay) {
                this.Reset();
            }
            this._velocity =  util.Vector2.Mulitply(this.Direction, this._speed);
        }

        // get IsEnemyFired():boolean {
        //     return this._isEnemyFired;
        // }

        // set IsEnemyFired(newState:boolean) {
        //     this._isEnemyFired = newState;
        // }

        // Constructors
        
        constructor() {
            super("bullet");
        }

        // private methods
        private _move():void {  
            this._updatePosition();
            this.Position = util.Vector2.Add(this.Position, this._velocity);
            this.x = this.Position.x;
            this.y = this.Position.y;
        }

        private _checkBounds(): any {
            if((this.y > (480 + this.HalfHeight)) || (this.y < -this.HalfHeight)) {
                this.IsInPlay = false;
                this.Reset();
            }
        }
        
        // public methods
        public Reset(): void {
            super.Reset();
            this.x = -1000;
            this.y = -1000;
            this._updatePosition();
            this.Direction = util.Vector2.zero();
            // this.IsEnemyFired = false;
        } 

        public Start(): void {
            super.Start();
            this._speed = 5;
            this.IsInPlay = false;
        }

        public Update(): void {
            super.Update();          
            if(this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        }

        public Destroy(): void {
        }

    }
}