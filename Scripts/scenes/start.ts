module scenes{
    export class Start extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _welcomeLabel:objects.Label;
        private _startButton:objects.Button;
        private _instructionsButton:objects.Button;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            // adds ocean to the stage
            this.addChild(this._background);

            // adds ocean to the stage
            this.addChild(this._startButton);
            
            this.addChild(this._instructionsButton);

            // adds player to the stage
            this.addChild(this._welcomeLabel);

            // event listeners

            // starts the play scene
            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.LEVEL1;
            })
            
            this._instructionsButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this._instructionsButton = new objects.Button("instructionsButton", 320, 430, true);
            this._background = new objects.Background("startBackground");
            this._welcomeLabel = new objects.Label("Galaxy Hero", "60px", "Consolas", "#FFFF00", 320, 240, true);

            this.Main();
        }
        public Update(): void {

        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}