var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // constructor
        function Bullet(bulletNum) {
            if (bulletNum === void 0) { bulletNum = 100; }
            this.BulletNum = bulletNum;
            this.Start();
        }
        Object.defineProperty(Bullet.prototype, "Bullets", {
            //public properties
            get: function () {
                return this._bullets;
            },
            set: function (newBulletArray) {
                this._bullets = newBulletArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "BulletNum", {
            get: function () {
                return this._bulletNum;
            },
            set: function (numberOfBullets) {
                this._bulletNum = numberOfBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "CurrentBullet", {
            get: function () {
                return this._currentBullet;
            },
            set: function (newBulletPointer) {
                this._currentBullet = newBulletPointer;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        Bullet.prototype.Start = function () {
            // create the bullets container
            this.Bullets = new Array();
            // fill up bullet container
            for (var count = 0; count < this.BulletNum; count++) {
                this.Bullets[count] = new objects.Bullet();
            }
            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
            this._divergeLeft = new util.Vector2(-1, 0);
            this._divergeRight = new util.Vector2(1, 0);
            this._count = 0;
        };
        Bullet.prototype.Update = function () {
            this.Bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Bullet.prototype.FireBullet = function (spawnPoint, direction) {
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.x = spawnPoint.x;
            this.CurrentBullet.y = spawnPoint.y;
            this.CurrentBullet.Direction = direction;
            this.CurrentBullet.IsInPlay = true;
            // if(actor.IsEnemy == true)
            // {
            //     this.CurrentBullet.IsEnemyFired = true;
            // }
            // else {
            //     this.CurrentBullet.IsEnemyFired = false;
            // }
            this._currentBulletIndex++;
            if (this._currentBulletIndex >= this.Bullets.length) {
                this._currentBulletIndex = 0;
            }
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
        };
        Bullet.prototype.TripleShot = function (spawnPoint, direction) {
            this.FireBullet(spawnPoint, direction);
            this.FireBullet(spawnPoint, util.Vector2.Add(direction, this._divergeLeft));
            this.FireBullet(spawnPoint, util.Vector2.Add(direction, this._divergeRight));
        };
        Bullet.prototype.iterate = function () {
            this._count += 1;
        };
        Bullet.prototype.CircleShot = function (spawnPoint, direction) {
            /*
            // var perimeterPoint = new util.Vector2(0,0);
            var perimeterPoint: util.Vector2;
            var shift: util.Vector2;
            var newDirection: util.Vector2;
            var degrees = 45;

            // shift = new util.Vector2();

            // newDirection = util.Vector2.Rotate(newDirection,directionSift);
            shift= util.Vector2.Rotate(center,degrees);
            perimeterPoint = util.Vector2.Add(shift,spawnPoint);
            */
            var stopFiring = false;
            var east = util.Vector2.Add(spawnPoint, new util.Vector2(-115, -72.5));
            var eastSouthEast = util.Vector2.Add(spawnPoint, new util.Vector2(-115, -54));
            var southEast = util.Vector2.Add(spawnPoint, new util.Vector2(-115, -36));
            var southSouthEast = util.Vector2.Add(spawnPoint, new util.Vector2(-115, -18));
            var west = util.Vector2.Add(spawnPoint, new util.Vector2(115, -72.5));
            var westSouthWest = util.Vector2.Add(spawnPoint, new util.Vector2(115, -54));
            var southWest = util.Vector2.Add(spawnPoint, new util.Vector2(115, -36));
            var southSouthWest = util.Vector2.Add(spawnPoint, new util.Vector2(115, -18));
            if (stopFiring == false) {
                // if(createjs.Ticker.getTime() % 10 == 0){
                // }
                this.iterate();
                setInterval(this.CircleShot, 10000);
                console.log(this._count);
                switch (this._count) {
                    case 1:
                        this.FireBullet(east, direction);
                        break;
                    case 2:
                        this.FireBullet(eastSouthEast, direction);
                        break;
                    case 3:
                        this.FireBullet(southEast, direction);
                        break;
                    case 4:
                        this.FireBullet(southSouthEast, direction);
                        break;
                    case 5:
                        this.FireBullet(spawnPoint, direction);
                        break;
                    case 6:
                        this.FireBullet(southSouthWest, direction);
                        break;
                    case 7:
                        this.FireBullet(southWest, direction);
                        break;
                    case 8:
                        this.FireBullet(westSouthWest, direction);
                        break;
                    case 9:
                        this.FireBullet(west, direction);
                        break;
                    case 10:
                        this._count = 0;
                        stopFiring = true;
                        break;
                }
            }
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map