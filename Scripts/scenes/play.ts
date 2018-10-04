module scenes{
    export class Play extends objects.Scene{
        // private instance variables
        
        private _player:objects.Player;
        private _meteorite:objects.Meteorite;

        private _planetNum:number;
        private _enemiesNum:number;
        private _planets:objects.Planet[];
        private _enemies:objects.Enemies[];
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

            // adds meteorite to the scene
            this.addChild(this._meteorite);

            // adds player to the stage
            this.addChild(this._player);


            // adds planets to the scene
            for(let count = 0; count < this._planetNum; count++) {
                this.addChild(this._planets[count]);
            }

            //adds enemies to the scene
            for(let count = 0;count < this._enemiesNum;count++){
                this.addChild(this._enemies[count])
            }
            
        }        
        public Start(): void {

            this._planetNum = 1;
            this._backgroundNum = 2;
            this._enemiesNum = 4;
            
            // instantiates background array
            this._backgrounds = new Array<objects.Background>();
            // creates 2 backgrounds to have an infinte scroller
            for(let count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
            }
            this._currentBackgroundNum = 0;
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();

            this._meteorite = new objects.Meteorite();
            this._player = new objects.Player();

            // must do this to instantiate the array
            this._planets = new Array<objects.Planet>();
            this._enemies = new Array<objects.Enemies>();
            // adds planets to the array
            for(let count = 0; count < this._planetNum; count++) {
                this._planets[count] = new objects.Planet();
            }
            for(let count = 0;count < this._enemiesNum; count++){
                this._enemies[count] = new objects.Enemies();
            }
            this.Main();
        }
        public Update(): void {
            
            this._player.Update();
            this._meteorite.Update();

            // updates each planet in array
            for (const planet of this._planets) {
                planet.Update();
            }
            for (const enemies of this._enemies){
                enemies.Update();
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