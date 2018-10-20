module managers {
    export class ScoreBoard {
        // private instance variables
        private _score:number;
        private _lives:number;
        private _highScore:number;
        private _ammo:number;

        private _scoreLabel:objects.Label;
        private _livesLabel:objects.Label;
        private _highScoreLabel:objects.Label;
        private _ammoLabel:objects.Label;

        // public properties
        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this._scoreLabel.text = "Score: " + this._score;
        }

        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            this._livesLabel.text = "Lives: " + this._lives;
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this._highScoreLabel.text = "High Score: " + this._highScore;
        }

        get Ammo():number {
            return this._ammo;
        }
        set Ammo(newValue:number){
            this._ammo = newValue;
            this._ammoLabel.text = "Ammo: " + this._ammo;
        }

        // constructor

        /**
         * Creates an instance of ScoreBoard.
         * @param {boolean} [isGameOver=false]
         */
        constructor(livesNum:number = 5, scoreNum:number = 0, highScoreNum:number = 0, ammo:number = 0) {

            this.Start();

            this.Lives = livesNum;
            this.Score = scoreNum;
            this.HighScore = highScoreNum;
            this.Ammo = ammo;

        }

        // private methods

        // public methods

        // Initialize Objects
        public Start():void {
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFFFF", 350, 10, false);
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFFFF", 20, 10, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFFFF", 320, 140, true);
            this._ammoLabel = new objects.Label("Ammo: 99","30px", "Consolas", "#FFFFFF",20,420, false )
        }

        public AddGameUI(currentScene:objects.Scene):void {
            currentScene.addChild(this._livesLabel);
            currentScene.addChild(this._scoreLabel);
            currentScene.addChild(this._ammoLabel);
        }

        public AddHighScore(currentScene:objects.Scene):void {
            currentScene.addChild(this._highScoreLabel);
        }

        public Reset(livesNum:number = 5, scoreNum:number = 0, ammo:number = 0): void {
            this.Lives = livesNum;
            this.Score = scoreNum;
            this.Ammo = ammo;
        }

    }
}