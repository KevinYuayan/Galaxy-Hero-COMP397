var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.OnLeftMouseDown = function (event) {
            if (event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }
        };
        Input.KeyPressed = function (event) {
            if (event.keyCode == 66) {
                if (managers.Game.scoreBoard.Bombs > 0) {
                    managers.Game.scoreBoard.Bombs -= 1;
                    managers.Game.shockwave.InPlay = true;
                    setTimeout(function () { managers.Game.shockwave.InPlay = false; }, 600);
                }
            }
        };
        Input.LeftButtonDown = false;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map