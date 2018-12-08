module objects {
    export class BitmapGameObject extends createjs.Bitmap {
         // private instance variables
         private _width:number;
         private _height:number;
         private _halfWidth:number;
         private _halfHeight:number;
 
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
         }
         
         // public methods
         public Reset():void {
             
         }

         public Start():void {

         }
 
         public Update():void {

         }

         public Destroy():void {

         }
    }
}