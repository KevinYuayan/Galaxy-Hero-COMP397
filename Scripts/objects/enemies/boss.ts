module objects {
    export class Boss extends objects.Enemy {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;
        private _bulletSpawn: util.Vector2;
        private _fireRate:number;
        private _deaths:number;
        private _lives:number;
        private _inPlay:boolean;

        get InPlay():boolean {
            return this._inPlay
        }

        set InPlay(newValue: boolean) {
            if (this._inPlay != newValue) {
                if(newValue == true) {
                    this._lives = 3 + this._deaths;
                    this.Start();
                } 
                else {
                    this._deaths += 1;
                    this.y = -10000
                    this.x = -10000
                    if (this._fireRate > 20) {
                        this._fireRate = 60 - (this._deaths * 5);
                    }
                }
                this._inPlay = newValue;
            }       
        }

        get Lives():number {
            return this._lives;
        }

        // constructors

        constructor() {
            super("boss");
            this._lives = 3;
            this._deaths = 0;
            this._fireRate = 60;
        }



        // private methods
        private _move() {
            this.x += this._horizontalSpeed;

            if(this._horizontalSpeed == 0){
                this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            }
            this._updatePosition();
        }

        private _checkBounds():void {

            if(this.y > config.Constants.canvasHeight + this.HalfHeight || this.y < -this.HalfHeight){
                this.Reset();
            }
            //checks for right boundary
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

        private _fireBullet() {
            if (createjs.Ticker.getTicks() % this._fireRate == 0) {
                // if((Math.random() < 0.17) && (this.y > 0)) {
                managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                // managers.Game.bulletManager.TripleShot(util.Vector2.Add(this.Position,this._bulletSpawn), util.Vector2.down());               
                // managers.Game.bulletManager.CircleShot(util.Vector2.Add(this.Position,this._bulletSpawn),util.Vector2.down());
                // console.log(this.name + " Instantiated" + createjs.Ticker.getTicks());   
            }
        }

        private _tripleshot() {
            if (createjs.Ticker.getTicks() % 60 == 0) {
                // if((Math.random() < 0.17) && (this.y > 0)) {
                // managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                managers.Game.bulletManager.TripleShot(util.Vector2.Add(this.Position,this._bulletSpawn), util.Vector2.down());               
                // managers.Game.bulletManager.CircleShot(util.Vector2.Add(this.Position,this._bulletSpawn),util.Vector2.down());
                // console.log(this.name + " Instantiated" + createjs.Ticker.getTicks());   
            }
        }


        // public methods
        public lostLife() {
            if(this._lives > 0) {
                this._lives -= 1;
                console.log("Boss lives = " + this._lives);
            }
        }


        public Start(): void {
            super.Start();
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._bulletSpawn = new util.Vector2(0, 2 + this.HalfHeight);
            this.y = this.HalfHeight;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.Reset();
        }
        public Update(): void {
            super.Update();
            this._move();
            this._checkBounds();
            if ((managers.Game.scoreBoard.Level == 3) && (this.y > 0))
            {
                this._tripleshot();
            }
            if ((managers.Game.scoreBoard.Level == 2) && (this.y > 0))
            {
                this._fireBullet();
            }
        }
        public Reset(): void {
            super.Reset();
            this._verticalSpeed = Math.floor((Math.random()*4)+6); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.IsColliding = false;
        }
        public Destroy(): void {
        }
    }
}