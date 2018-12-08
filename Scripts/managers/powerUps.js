var managers;
(function (managers) {
    var PowerUps = /** @class */ (function () {
        // constructor
        function PowerUps() {
            this.PowerUpNum = 6;
            this.Start();
        }
        Object.defineProperty(PowerUps.prototype, "PowerUps", {
            //public properties
            get: function () {
                return this._powerUps;
            },
            set: function (newPowerUpArray) {
                this._powerUps = newPowerUpArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PowerUps.prototype, "PowerUpNum", {
            get: function () {
                return this._powerUpsNum;
            },
            set: function (numberOfPowerUps) {
                this._powerUpsNum = numberOfPowerUps;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PowerUps.prototype, "CurrentPowerUp", {
            get: function () {
                return this._currentPowerUp;
            },
            set: function (newPowerUpPointer) {
                this._currentPowerUp = newPowerUpPointer;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        PowerUps.prototype.Start = function () {
            // create the powerup container
            this.PowerUps = new Array();
            // fill up first 3 slots with "Bomb" container
            for (var count = 0; count < this.PowerUpNum; count++) {
                this.PowerUps[count] = new objects.Bomb();
            }
            // set the current bullet to the first bullet object
            this._currentPowerUpIndex = 0;
            this.CurrentPowerUp = this.PowerUps[this._currentPowerUpIndex];
        };
        PowerUps.prototype.Update = function () {
            this.PowerUps.forEach(function (powerUp) {
                powerUp.Update();
            });
        };
        PowerUps.prototype.SpawnPowerUp = function (spawnPoint) {
            this.CurrentPowerUp.Position = spawnPoint;
            this.CurrentPowerUp.x = spawnPoint.x;
            this.CurrentPowerUp.y = spawnPoint.y;
            this.CurrentPowerUp.IsInPlay = true;
            if (this._currentPowerUpIndex >= this.PowerUps.length) {
                this._currentPowerUpIndex = 0;
            }
            this.CurrentPowerUp = this.PowerUps[this._currentPowerUpIndex];
        };
        return PowerUps;
    }());
    managers.PowerUps = PowerUps;
})(managers || (managers = {}));
//# sourceMappingURL=powerUps.js.map