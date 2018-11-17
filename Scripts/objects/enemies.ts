module objects {
    export class Enemies extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _bulletSpawn: util.Vector2;

        // public properties

        // constructor
        constructor() {
            super("enemies");

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height) {
                this.Reset();
            }

            
            if((createjs.Ticker.getTicks() % 20 == 0) && (this.y > 0)) {
                managers.Game.bulletManager.FireBullet(
                    util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
            }
            
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random() * 2) + 6);
            this.y = -this.Height * 20;// Math.floor((Math.random() * 10) + 5);
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._bulletSpawn = new util.Vector2(0, 5 + this.HalfHeight);
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