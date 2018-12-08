module objects {
    export abstract class Actor extends BitmapGameObject {
        
        
        // private instance variables

        private _isColliding:boolean;
        private _position:util.Vector2;
        // private _isEnemy:boolean;
        
        // public properties

        get Position():util.Vector2 {
            return this._position;
        }

        set Position(newPosition:util.Vector2) {
            this._position = newPosition;
        }

        get IsColliding():boolean {
            return this._isColliding;
        }

        set IsColliding(newValue:boolean) {
            this._isColliding = newValue;
        }

        // get IsEnemy():boolean {
        //     return this._isEnemy;
        // }

        // set IsEnemy(newState:boolean) {
        //     this._isEnemy = newState;
        // }



        // constructor
        constructor(imageString:string) {
            super(imageString);
            this.Start();
        }
        // private methods

        protected _updatePosition():void {
            this.Position.x = this.x;
            this.Position.y = this.y;
        }

        // public methods
        
        public Start():void {
            this.Position = new util.Vector2(this.x, this.y);
            this.Reset();
        }

        public Update(): void {
            this._updatePosition();
        }
        public Reset(): void {
            this.IsColliding = false;
        }
        public abstract Destroy(): void 
    }
}