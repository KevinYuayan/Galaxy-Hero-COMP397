module scenes{
    export class Play extends objects.Scene{
        // private instance variables
        
        private _player:objects.Player;
        private _island:objects.Island;

        private _cloudNum:number;
        private _clouds:objects.Cloud[];

        private _backgroundNum:number;  // total background objects
        private _backgrounds:objects.Background[];
        private _currentBackgroundNum:number;   // holds the array identifier for the current background object

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            // adds backgrounds to the stage
            for(let count = 0; count < this._backgroundNum; count++) {
                this.addChild(this._backgrounds[count]);
            }

            // adds island to the scene
            this.addChild(this._island);

            // adds player to the stage
            this.addChild(this._player);


            // adds clouds to the scene
            for(let count = 0; count < this._cloudNum; count++) {
                this.addChild(this._clouds[count]);
            }
            
        }        
        public Start(): void {

            this._cloudNum = 3;
            this._backgroundNum = 2;
            
            // instantiates background array
            this._backgrounds = new Array<objects.Background>();
            //creates 2 backgrounds to have continuity
            for(let count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            }
            this._currentBackgroundNum = 0;
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();

            this._island = new objects.Island();
            this._player = new objects.Player();

            // must do this to instantiate the array
            this._clouds = new Array<objects.Cloud>();

            // adds clouds to the array
            for(let count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            this.Main();
        }
        public Update(): void {
            
            this._player.Update();
            this._island.Update();

            // updates each cloud in array
            for (const cloud of this._clouds) {
                cloud.Update();
            }
            
            // updates background 0
            if(this._backgrounds[1].y >= 0 || this._backgrounds[1].y <= config.Constants.canvasHeight - this._backgrounds[1].Height){
                this._backgrounds[0].Update();
            }

            // updates background 1
            if(this._backgrounds[0].y >= 0 || this._backgrounds[0].y <= config.Constants.canvasHeight - this._backgrounds[0].Height){
                this._backgrounds[1].Update();
            }
            /* if (this._backgrounds[this._currentBackgroundNum].CheckBounds(){
                if(this._currentBackgroundNum == 0){
                    this._currentBackgroundNum++;
                }
                else{
                    this._currentBackgroundNum--;
                }
                this._backgrounds[this._currentBackgroundNum].Reset();                
            } */
        }
        public Reset(): void {

        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}