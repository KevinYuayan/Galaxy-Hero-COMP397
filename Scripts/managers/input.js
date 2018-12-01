var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.OnLeftMouseDown = function (event) {
            if (event.nativeEvent.button == 0) {
                // managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
                managers.Game.player.Fire();
            }
        };
        Input.LeftButtonDown = false;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map