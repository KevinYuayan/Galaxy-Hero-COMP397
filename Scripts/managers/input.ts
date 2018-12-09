module managers {
    export class Input {
        public static LeftButtonDown:boolean = false;
        public static space:boolean =false;
        public static enter:boolean = false;
        public static seven:boolean = false;
        public static moveBackward:boolean = false;
        public static moveForward:boolean = false;
        public static moveLeft: boolean = false;
        public static moveRight: boolean = false;
        public static enabled: boolean = true;
        public static gamepad1: managers.GamePad;


        public static Start() {
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);

            this.gamepad1 = new managers.GamePad(0);
        }

        public static Stop() {
            this.enabled = false;
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        public static OnLeftMouseDown(event) {
            if(event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
                // managers.Game.player.Fire();
              }
        }
        public static onKeyDown(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = true;
                break;

                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = true;
                break;

                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = true;
                break;

                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = true;
                break;

                case config.Key.SPACEBAR:
                    this.space = true;
                break;

                case config.Key.P:
                    this.enabled = (this.enabled) ? false : true;
                    break;
                case config.Key.ENTER:
                    this.enter = true;
                    break;
                case config.Key.SEVEN:
                    this.seven = true;
            }
        }


        public static onKeyUp(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = false;
                break;

                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = false;
                break;

                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = false;
                break;

                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = false;
                break;

                case config.Key.SPACEBAR:
                    this.space = false;
                break;
                case config.Key.ENTER:
                    this.enter = false;
                    break;
                case config.Key.SEVEN:
                    this.seven = false;
                    break;
            }
        }
        public static KeyPressed(event) {
            if(event.keyCode == 66) {
                if (managers.Game.scoreBoard.Bombs > 0) {
                    managers.Game.scoreBoard.Bombs -= 1;
                    managers.Game.shockwave.InPlay = true;
                    let bombSound = createjs.Sound.play("explosion00");
                    bombSound.volume = 1;
                    setTimeout(function() {managers.Game.shockwave.InPlay = false}, 600);
                }
            }
        }

        public static EnterPress(event) {
            if(event.keyCode == config.Key.ENTER) {
                if (managers.Game.scoreBoard.Level == 1) {
                    managers.Game.currentState = config.Scene.LEVEL1;
                }
                if (managers.Game.scoreBoard.Level == 2) {
                    managers.Game.currentState = config.Scene.LEVEL2;
                }
                if (managers.Game.scoreBoard.Level == 3) {
                    managers.Game.currentState = config.Scene.LEVEL3;
                }
            }
        }
        public static GoBack(event) {
            if(event.keyCode == config.Key.BACKSPACE){
                managers.Game.currentState = config.Scene.START;
            }

        }
        public static CheatLife(event) {
            if(event.keyCode == config.Key.SEVEN) {
               managers.Game.scoreBoard.Lives += 1;
            }
        }
    }
}