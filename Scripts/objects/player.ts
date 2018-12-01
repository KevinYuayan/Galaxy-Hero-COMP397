module objects {
    export class Player extends objects.Actor {
        
        // private instance variables
        _bulletSpawn:util.Vector2;

        // public properties
        get BulletSpawn():util.Vector2{
            return this._bulletSpawn;   
        }
        set BulletSpawn(newSpawnPoint:util.Vector2){
            this._bulletSpawn = newSpawnPoint;
        }
        
        // constructors
        constructor() {
            super("player");

            this.Start();
        }


        // private methods
        public Fire() {
            managers.Game.bulletManager.FireBullet(this.BulletSpawn, util.Vector2.up(),this);
        }
        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.IsEnemy = false;
            this.y = 435;
            super.Start();
        }

        public Update():void {
            this.x = managers.Game.stage.mouseX;
            super.Update();
            this.BulletSpawn = new util.Vector2(this.x -12, this.y - this.HalfHeight - 19);

            if(this.x > config.Constants.canvasWidth - this.HalfWidth){
                this.x = config.Constants.canvasWidth - this.HalfWidth;
            }

            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
            }

        }

        public Reset(): void {
            super.Reset();
        }
        
        public Destroy(): void {
        }
    }
}