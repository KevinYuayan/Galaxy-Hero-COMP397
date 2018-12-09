module objects {
    export class Enemies extends objects.Enemy {
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
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Reset();
            }
            if(this.x > config.Constants.canvasWidth - this.HalfWidth){
                this.x = config.Constants.canvasWidth - this.HalfWidth
                this.Reset();
            }
            //checks for left boundary
            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
                this.Reset();
            }
        }

        private _firebullet():void {
            if (managers.Game.scoreBoard.Level == 2 || managers.Game.scoreBoard.Level == 3) {
                if ((createjs.Ticker.getTicks() % 90 == 0) && (this.y > 0)) {
                    //if((Math.random() < 0.17) && (this.y > 0)) {
                    managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                }
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfHeight;
            this.regY = this.HalfWidth;
            super.Start();
            this._bulletSpawn = new util.Vector2(0, 2 + this.HalfHeight);
            this.Reset();
        }
        
        public Update(): void {
            this._move();
            super.Update();
            this._checkBounds();
            this._firebullet();
        }
        
        public Reset(): void {
            super.Reset();
            this._verticalSpeed = Math.floor((Math.random()*2)+4); // speed from 1 to 5
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        }
        
        public Destroy(): void {
            
        }


    }
}