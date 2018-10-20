module objects {
    export class Player extends Actor {
        
        // private instance variables

        // public properties
        
        // constructors
        constructor() {
            super("player");

            this.Start();
        }


        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = 435;
            super.Start();
        }

        public Update():void {
            this.x = managers.Game.stage.mouseX;

            if(this.x > config.Constants.canvasWidth - this.HalfWidth){
                this.x = config.Constants.canvasWidth - this.HalfWidth;
            }

            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
            }
            super.Update();

        }

        public Reset(): void {
            super.Reset();
        }
        
        public Destroy(): void {
        }


    }
}