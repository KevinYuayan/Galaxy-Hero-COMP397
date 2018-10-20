module objects {
    export abstract class GameObject extends createjs.Bitmap {
         // private instance variables
         private _width:number;
         private _height:number;
         private _halfWidth:number;
         private _halfHeight:number;
         private _position:util.Vector2;
         private _isColliding:boolean;
 
         // public properties
         get Width():number {
             return this._width;
         }
 
         set Width(newValue:number) {
             this._width = newValue;
             this.HalfWidth = this._width * 0.5;
         }
 
         get Height():number {
             return this._height;
         }
 
         set Height(newValue:number) {
             this._height = newValue;
             this.HalfHeight = this._height * 0.5;
         }
 
         get HalfHeight():number {
             return this._halfHeight;
         }
 
         set HalfHeight(newValue:number) {
             this._halfHeight = newValue;
         }
 
         get HalfWidth():number {
             return this._halfWidth;
         }
 
         set HalfWidth(newValue:number) {
             this._halfWidth = newValue;
         }

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
 
         // constructors
         constructor(imageString:string) {
             super(managers.Game.assetManager.getResult(imageString));
 
             this.name = imageString;
             this._initialize();
         }
 
         // private methods
         private _initialize():void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Position = new util.Vector2(this.x, this.y);
            this.IsColliding = false;
         }

         protected _updatePosition():void {
            this.Position.x = this.x;
            this.Position.y = this.y;
        }
         
         // public methods
         public abstract Reset():void;

         public abstract  Start():void;
 
         public abstract  Update():void;

         public abstract  Destroy():void;
    }
}