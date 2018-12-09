module objects {
    export class Player extends objects.Actor {
        
        // private instance variables
        private _bulletSpawn:util.Vector2;
        private _tripleShot:boolean;
        private _invulnerable:boolean;

        get Invulnerable():boolean {
            return this._invulnerable;
        }

        set Invulnerable(newValue: boolean) {
                this._invulnerable = newValue;
        }       
        

        // public properties
        get BulletSpawn():util.Vector2{
            return this._bulletSpawn;   
        }
        set BulletSpawn(newSpawnPoint:util.Vector2){
            this._bulletSpawn = newSpawnPoint;
        }
        get TripleShot():boolean{
            return this.TripleShot;  
        }
        set TripleShot(newBool:boolean){
            this._tripleShot = newBool;
        }
        
        // constructors
        constructor() {
            super("player");

            this.Start();
        }


        // private methods

        private invulnerableFrames():void{
            if(this.Invulnerable == true){
                this.alpha = 0.5;
            }
            else{
                this.alpha = 1;
            }
        }

        // public methods
        public Move():void {
            // this.x = managers.Game.stage.mouseX;

            let direction = (this.rotation -90) * -1;
            let degToRad = Math.PI / 180.0;


            // standard movement for top scroller - left and right
            
            if(managers.Input.moveRight) {
                this.x += 5;
            }

            if(managers.Input.moveLeft) {
                this.x -= 5;
            }
            

            

            // standard movement - forward - back

            if(managers.Input.moveForward) {
                this.y -= 5;
            }

            if(managers.Input.moveBackward) {
                this.y += 5;
            }
            

            /* move in direction that player is facing */

            /*
            if(managers.Input.moveForward) {
                this.x += 5 * Math.cos(direction * (degToRad));
                this.y -= 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveBackward) {
                this.x -= 5 * Math.cos(direction * (degToRad));
                this.y += 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveLeft) {
                this.rotation -= 5;
            }

            if(managers.Input.moveRight) {
                this.rotation += 5;
            }
            */


            //  gamepad controls 
            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] > 0) {
                this.x += 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] < 0) {
                this.x -= 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] > 0) {
                this.y += 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] < 0) {
                this.y -= 5;
            }
            
        }
        // public Fire() {
        //     managers.Game.bulletManager.FireBullet(this.BulletSpawn, util.Vector2.up());
        // }
        
        public Fire(){
            if(managers.Input.space) {
                if(createjs.Ticker.getTicks() % 10 == 0 )
                {
                    if (this._tripleShot) {
                        managers.Game.bulletManager.TripleShot(this.BulletSpawn, util.Vector2.up());
                    }
                    else {
                        managers.Game.bulletManager.FireBullet(this.BulletSpawn, util.Vector2.up());
                    }
                }
            }
        }

        public chkBounds()
        {
            if(this.x > config.Constants.canvasWidth - this.HalfWidth){
                this.x = config.Constants.canvasWidth - this.HalfWidth;
            }

            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
            }
            // if(this.y > config.Constants.canvasHeight + this.Height){
            if(this.y > 435)
            {
                this.y = 435
            }
            if(this.y < (config.Constants.canvasHeight/2)){
                this.y = (config.Constants.canvasHeight/2)
            }

        }

        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            // this.IsEnemy = false;
            this.Invulnerable = false;
            this.y = 435;
            this.x = 320;
            super.Start();
        }

        public Update():void {
            this.Move();
            this.Fire();
            super.Update();
            this.BulletSpawn = new util.Vector2(this.x -12, this.y - this.HalfHeight - 19);
            this.invulnerableFrames();
            this.chkBounds();

        }

        public Reset(): void {
            super.Reset();
        }
        
        public Destroy(): void {
        }
    }
}