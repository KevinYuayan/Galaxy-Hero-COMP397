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
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map