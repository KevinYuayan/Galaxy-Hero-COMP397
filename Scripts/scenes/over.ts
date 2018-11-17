module scenes{
    export class Over extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _gameOverLabel:objects.Label;
        private _restartButton:objects.Button;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            // adds background to the stage
            this.addChild(this._background);

            // adds restartButton to the stage
            this.addChild(this._restartButton);

            // adds player to the stage
            this.addChild(this._gameOverLabel);

            // event listeners

            // starts the play scene
            this._restartButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.LEVEL1;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._background = new objects.Background("spaceBackground", 0);
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);

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