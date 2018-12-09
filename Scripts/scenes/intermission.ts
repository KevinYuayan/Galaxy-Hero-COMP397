module scenes{
    export class Intermission extends objects.Scene{
        //private instance variables
        private _background:objects.Background;
        private _panel:objects.Board;
        private _player:objects.BitmapGameObject;
        private _loading: objects.BitmapGameObject;

        private _waitLabel: objects.Label;
        private _nextLabel: objects.Label;
        private _nextButton: objects.Button;

        private _scoreBoard:managers.ScoreBoard;

        //public properties


        //constructor
        constructor() {
            super();
            this.Start();
        }
        //private methods

        //public methods
        public Start(): void {
            let _startSound = createjs.Sound.play("lg_powerup");
            
            this._background = new objects.Background("instructionsBackground");
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this._nextButton = new objects.Button("startButton", 320, 420, true);
            this._nextLabel = new objects.Label("Enter the next Level when you're ready...","20px","planet","#FFFF00",80,330,false,350);
            this._loading = new objects.BitmapGameObject("loading");
            this._loading.x = 305;
            this._loading.y = 210;


            switch(managers.Game.scoreBoard.Level)
            {
                case 2:
                    this._waitLabel = new objects.Label("Time to kick it up a notch !", "20px", "planet", "#FFFF00", 170, 130, false, 350);
                    // managers.Game.scoreBoard.Level = 2;
                    // setInterval(this.setToLevel2,5000);
                    break;
                case 3:
                    this._waitLabel = new objects.Label("Welcome to Hell !", "20px", "planet", "#FFFF00", 170, 130, false, 350);
                    // managers.Game.scoreBoard.Level = 3;
                    // setInterval(this.setToLevel3,5000);
                    break;

            }
            this.SetupInput();
            this.Main();
        }
        public SetupInput(): void {
            document.addEventListener("keydown", managers.Input.EnterPress);
        }

        public Update(): void {
            // throw new Error("Method not implemented.");
        }
        public Reset(): void {
            // throw new Error("Method not implemented.");
        }
        public Destroy(): void {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
        }
        public Main(): void {
            //adds objects to the stage
            this.addChild(this._background);
            this.addChild(this._panel);
            this.addChild(this._waitLabel);
            this.addChild(this._nextLabel);
            this.addChild(this._nextButton);
            this.addChild(this._loading);


            switch(managers.Game.scoreBoard.Level)
            {
                case 2:
                    // managers.Game.scoreBoard.Level = 2;
                    // setInterval(this.setToLevel2,5000);
                    this._nextButton.on("click", ()=>{
                        managers.Game.currentState = config.Scene.LEVEL2;
                    })

                    break;
                case 3:
                    this._nextButton.on("click", ()=>{
                        managers.Game.currentState = config.Scene.LEVEL3;
                    })
                    // if(managers.Input.enter){
                    //     managers.Game.currentState = config.Scene.LEVEL3;
                    // }
                    break;

            }
        }

    }
}