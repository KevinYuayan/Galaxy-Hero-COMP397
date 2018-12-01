module objects {
    export class Shockwave extends objects.Actor{
        // private instance variables 
        private _inPlay:boolean;
        public shockwaveShape:createjs.Shape;
        // public properties

        get InPlay():boolean {
            return this._inPlay
        }

        set InPlay(newValue: boolean) {
            if (this._inPlay != newValue) {
                if(newValue == true) {
                    this.Position.x = managers.Game.player.Position.x;                    
                    this.Position.y = managers.Game.player.Position.y;
                    this.Reset();
                } 
                else {
                    this.Position.y = -10000
                    this.Position.x = -10000
                }
                this._inPlay = newValue;
            }       
        }


        constructor() {
            super("shockwave");          
            this.Start();
            this._inPlay = false;
        }

        private CircleGraphic() {
            this.shockwaveShape.graphics.clear();
            this.shockwaveShape.graphics.setStrokeStyle(1);
            this.shockwaveShape.graphics.beginStroke(createjs.Graphics.getRGB(0,0,0));
            this.shockwaveShape.graphics.beginFill("blue");
        }
        public Start():void {
            this.shockwaveShape = new createjs.Shape();
            this.Position = new util.Vector2(-10000, -10000);
            this.Reset();
            this.shockwaveShape.alpha = 0.1;
        }

        public Update(): void {
            this.shockwaveShape.x = this.Position.x;
            this.shockwaveShape.y = this.Position.y;
            this.x = this.Position.x;
            this.y = this.Position.y;
            if(this.InPlay) {
                this.Height += 8;
                this.CircleGraphic();
                this.shockwaveShape.graphics.drawCircle(0,0,this.Height);
            }
        }
        public Reset(): void {
            this.Height = 10;
        }
        public Destroy(): void {
        }
    }
}