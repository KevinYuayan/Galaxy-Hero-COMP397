module objects {
    export class Enemies extends objects.GameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;
        private _bulletSpawn: util.Vector2;

        // constructors

        constructor() {
            super("enemies");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Reset();
            }
            if((createjs.Ticker.getTicks() % 20 == 0) && (this.y > 0)) {
                managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfHeight;
            this.regY = this.HalfWidth;
            this._bulletSpawn = new util.Vector2(0, 5 + this.HalfHeight);
            this.Reset();
            //super.Start();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
            //super.Update();
        }
        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        }
        public Destroy(): void {
            
        }


    }
}