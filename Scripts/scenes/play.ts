module scenes{
    export class Play extends objects.Scene{
        // private instance variables
        
        private _player:objects.Player;
        private _island:objects.Island;

        private _cloudNum:number;
        private _clouds:objects.Cloud[];

        
        private _background:objects.Background;

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
            this._background = new objects.Background("spaceBackground", config.Constants.verticalPlaySpeed);
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
            this._background.Update();
            this._island.Update();

            // updates each cloud in array
            for (const cloud of this._clouds) {
                cloud.Update();
            }
        }
        public Reset(): void {

        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}