var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.Start = function () {
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            this.gamepad1 = new managers.GamePad(0);
        };
        Input.Stop = function () {
            this.enabled = false;
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        };
        Input.OnLeftMouseDown = function (event) {
            if (event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
                // managers.Game.player.Fire();
            }
        };
        Input.onKeyDown = function (event) {
            switch (event.keyCode) {
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
        };
        Input.onKeyUp = function (event) {
            switch (event.keyCode) {
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
        };
        Input.KeyPressed = function (event) {
            if (event.keyCode == 66) {
                if (managers.Game.scoreBoard.Bombs > 0) {
                    managers.Game.scoreBoard.Bombs -= 1;
                    managers.Game.shockwave.InPlay = true;
                    var bombSound = createjs.Sound.play("explosion00");
                    bombSound.volume = 1;
                    setTimeout(function () { managers.Game.shockwave.InPlay = false; }, 600);
                }
            }
        };
        Input.EnterPress = function (event) {
            if (event.keyCode == config.Key.ENTER) {
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
        };
        Input.GoBack = function (event) {
            if (event.keyCode == config.Key.BACKSPACE) {
                managers.Game.currentState = config.Scene.START;
            }
        };
        Input.CheatLife = function (event) {
            if (event.keyCode == config.Key.SEVEN) {
                managers.Game.scoreBoard.Lives += 1;
            }
        };
        Input.LeftButtonDown = false;
        Input.space = false;
        Input.enter = false;
        Input.seven = false;
        Input.moveBackward = false;
        Input.moveForward = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.enabled = true;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map