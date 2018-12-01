module managers {
    export class Input {
        public static LeftButtonDown:boolean = false;
        public static space:boolean =false;
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

            }
        }
    }
}