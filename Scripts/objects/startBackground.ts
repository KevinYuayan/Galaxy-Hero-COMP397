module objects {
    export class StartBackground extends objects.GameObject {
        // private instance variables
        private verticalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("startBackground");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.y >=0) {
                this.Reset();
            }
        }

        private _move():void {
            
        }

        // public methods

        public Reset(): void {
            
        }        
        
        public Start(): void {
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}