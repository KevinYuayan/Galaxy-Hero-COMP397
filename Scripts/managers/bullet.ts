module managers {
    export class Bullet {
        // private instance variables
        private _bullets: objects.Bullet[];
        private _bulletNum: number;
        private _currentBullet: objects.Bullet;
        private _currentBulletIndex: number;

        // public properties
        get Bullets():objects.Bullet[] {
            return this._bullets;
        }

        set Bullets(newBulletArray:objects.Bullet[]) {
            this._bullets = newBulletArray;
        }

        get BulletNum():number {
            return this._bulletNum;
        }

        set BulletNum(numberOfBullets:number) {
            this._bulletNum = numberOfBullets;
        }

        get CurrentBullet():objects.Bullet {
            return this._currentBullet;
        }

        set CurrentBullet(newBulletPointer:objects.Bullet) {
            this._currentBullet = newBulletPointer;
        }

        // constructor
        constructor(bulletNum:number = 1) {

            this.BulletNum = bulletNum;

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            // create the bullets container
            this.Bullets = new Array<objects.Bullet>();

            // fill up bullet container
            for (let count = 0; count < this.BulletNum; count++) {
                this.Bullets[count] = new objects.Bullet();
            }

            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
            
            
        }

        public Update():void {
            this.Bullets.forEach(bullet => {
                bullet.Update();
            });
        }

        public FireBullet(spawnPoint:util.Vector2, direction:util.Vector2):void {
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.x = spawnPoint.x;
            this.CurrentBullet.y = spawnPoint.y;
            this.CurrentBullet.Direction = direction;
            this.CurrentBullet.IsInPlay = true;
            
            this._currentBulletIndex++;
            if(this._currentBulletIndex >= this.Bullets.length) {
                this._currentBulletIndex = 0;
            }
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
        }
    }
}