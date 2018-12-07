module objects {
    export abstract class Level extends objects.Scene {
        // private instance variables        
        protected _meteorite: objects.Meteorite;

        protected _bulletManager: managers.Bullet;
        protected _powerUpManager: managers.PowerUps;
        private _gamepadManager: managers.GamePad;
        protected _shockwave:objects.Shockwave;

        protected _planetNum: number;
        protected _enemiesNum: number;
        protected _planets: objects.Planet[];
        protected _enemies: objects.Enemies[];
        protected _boss: objects.Boss;
        protected _backgroundNum: number;  // total background objects
        protected _backgrounds: objects.Background[];
        protected _currentBackgroundNum: number;   // holds the array identifier for the current background object
        protected _engineSound: createjs.AbstractSoundInstance;
        protected _scoreBoard:managers.ScoreBoard;
        protected _player: objects.Player;

        // public properties
        
        public powerUp: objects.PowerUp;
        // constructor
        constructor() {
            super();
            // May cause issues with powerups
        }
        // private methods

        // public methods
        public abstract Main():void;

        public abstract Start():void;

        public abstract Update():void;

        public abstract Reset():void;

        public Destroy():void{
            this.removeAllChildren();
        }

    }
}