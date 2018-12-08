module managers{
    export class PowerUps{
        //private instance variables
        private _powerUps: objects.PowerUp[];
        private _powerUpsNum: number;
        private _currentPowerUp: objects.PowerUp;
        private _currentPowerUpIndex: number;
        private _powerUpString:string;

        //public properties
        get PowerUps():objects.PowerUp[] {
            return this._powerUps;
        }

        set PowerUps(newPowerUpArray:objects.PowerUp[]) {
            this._powerUps = newPowerUpArray;
        }

        get PowerUpNum():number {
            return this._powerUpsNum;
        }

        set PowerUpNum(numberOfPowerUps:number) {
            this._powerUpsNum = numberOfPowerUps;
        }

        get CurrentPowerUp():objects.PowerUp {
            return this._currentPowerUp;
        }

        set CurrentPowerUp(newPowerUpPointer:objects.PowerUp) {
            this._currentPowerUp = newPowerUpPointer;
        }

        // constructor
        constructor() {

            this.PowerUpNum = 6;

            this.Start();
        }

        //private methods

        //public methods
        public Start():void {
            // create the powerup container
            this.PowerUps = new Array<objects.PowerUp>();

            // fill up first 3 slots with "Bomb" container
            for (let count = 0; count < this.PowerUpNum; count++) {
                this.PowerUps[count] = new objects.Bomb();
            }

            // set the current bullet to the first bullet object
            this._currentPowerUpIndex = 0;
            this.CurrentPowerUp = this.PowerUps[this._currentPowerUpIndex];
            
            
        }

        public Update():void {
            this.PowerUps.forEach(powerUp => {
                powerUp.Update();
            });
        }

        public SpawnPowerUp(spawnPoint:util.Vector2) {
            this.CurrentPowerUp.Position = spawnPoint;
            this.CurrentPowerUp.x = spawnPoint.x;
            this.CurrentPowerUp.y = spawnPoint.y;
            this.CurrentPowerUp.IsInPlay = true;

            
            if(this._currentPowerUpIndex >= this.PowerUps.length) {
                this._currentPowerUpIndex = 0;
            }

            this.CurrentPowerUp = this.PowerUps[this._currentPowerUpIndex];
        }
    }
}