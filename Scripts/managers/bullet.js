var managers;
(function (managers) {
    var BulletMNGR = /** @class */ (function () {
        // constructor
        function BulletMNGR(bulletNum) {
            if (bulletNum === void 0) { bulletNum = 1; }
            this.BulletNum = bulletNum;
            this.Start();
        }
        Object.defineProperty(BulletMNGR.prototype, "Bullets", {
            // public properties
            get: function () {
                return this._bullets;
            },
            set: function (newBulletArray) {
                this._bullets = newBulletArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BulletMNGR.prototype, "BulletNum", {
            get: function () {
                return this._bulletNum;
            },
            set: function (numberOfBullets) {
                this._bulletNum = numberOfBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BulletMNGR.prototype, "CurrentBullet", {
            get: function () {
                return this._currentBullet;
            },
            set: function (newBulletPointer) {
                this._currentBullet = newBulletPointer;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        BulletMNGR.prototype.Start = function () {
            // create the bullets container
            this.Bullets = new Array();
            // fill up bullet container
            for (var count = 0; count < this.BulletNum; count++) {
                this.Bullets[count] = new objects.Bullet();
            }
            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
        };
        BulletMNGR.prototype.Update = function () {
            this.Bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        BulletMNGR.prototype.FireBullet = function (spawnPoint, direction) {
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
        return BulletMNGR;
    }());
    managers.BulletMNGR = BulletMNGR;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map