var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (object1, object2) {
            if (!object2.IsColliding) {
                var distance = util.Vector2.Distance(object1.Position, object2.Position);
                var totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "meteorite":
                            var thunderSound = createjs.Sound.play("explosion01");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        case "planet":
                            var planetSound = createjs.Sound.play("explosion01");
                            planetSound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        case "enemies":
                            if (object1.name == "bullet") {
                                var explosionSound_1 = createjs.Sound.play("explosion01");
                                explosionSound_1.volume = 0.1;
                                managers.Game.scoreBoard.Score += 100;
                                object2.Reset();
                                object1.Reset();
                                console.log("enemy hit by bullet");
                            }
                            else {
                                var explosionSound_2 = createjs.Sound.play("explosion02");
                                explosionSound_2.volume = 0.1;
                                managers.Game.scoreBoard.Lives -= 1;
                            }
                            break;
                        case "bullet":
                            var explosionSound = createjs.Sound.play("explosion02");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            object2.Reset();
                            break;
                    }
                    if (managers.Game.scoreBoard.Lives <= 0) {
                        managers.Game.currentState = config.Scene.OVER;
                        if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map