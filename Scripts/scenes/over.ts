module scenes{
    export class Over extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _gameOverLabel:objects.Label;
        private _restartButton:objects.Button;
        private _panel:objects.Board;
        private _won:boolean;

        // public properties

        // constructors

        constructor(won:boolean = false) {
            super();
            this._won = won;
            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            // adds background to the stage
            this.addChild(this._background);

            this.addChild(this._panel);

            // adds restartButton to the stage
            this.addChild(this._restartButton);

            // adds player to the stage
            this.addChild(this._gameOverLabel);

            // event listeners

            // starts the play scene
            this._restartButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.LEVEL1;
            })

            managers.Game.scoreBoard.AddHighScore(this);
        }        
        public Start(): void {
            let msglbl:string = "Game Over";
            if (this._won) {
                msglbl = "Congratulations!"
            }
            // Instantiates objects
            managers.Game.scoreBoard.Reset();
            this._restartButton = new objects.Button("restartButton", 780, 360, true);
            this._background = new objects.Background("spaceBackground", 0);
            this._gameOverLabel = new objects.Label(msglbl, "30px", "Consolas", "#FFFF00", 780, 240, true);
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this.Main();
        }
        public Update(): void {

            this._background.Update();
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}