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
                    console.log(object1.name + " collided with: " + object2.name);
                    switch (object2.name) {
                        case "meteorite":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        // case "planet":
                        case "boss":
                            var explosionSound = createjs.Sound.play("explosion01");
                            explosionSound.volume = 0.1;
                            console.log("explosion01 sound");
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        case "enemies":
                            if (actor1.name == "bullet") {
                                explosionSound = createjs.Sound.play("explosion01");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Score += 100;
                                // 10% chance for Bomb to spawn when enemy dies
                                if (Math.random() < 0.1) {
                                    // checks if powerUp is already in play
                                    // TODO needs fine tuning
                                    if (managers.Game.currentLevel.powerUp == null || managers.Game.currentLevel.powerUp.destroyed) {
                                        managers.Game.currentLevel.powerUp = new objects.Bomb();
                                        managers.Game.currentLevel.addChild(managers.Game.currentLevel.powerUp);
                                    }
                                }
                                actor2.Reset();
                                actor1.Reset();
                            }
                            else {
                                explosionSound = createjs.Sound.play("explosion02");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Lives -= 1;
                            }
                            break;
                        case "bullet":
                            explosionSound = createjs.Sound.play("explosion02");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            object2.Reset();
                            break;
                        case "bomb":
                            if (actor1.name == "player") {
                                managers.Game.currentLevel.powerUp.Collected();
                            }
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