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
        Collision.Check = function (actor1, actor2) {
            if (!actor2.IsColliding) {
                var distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                var totalHeight = actor1.HalfHeight + actor2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    actor2.IsColliding = true;
                    console.log(actor1.name + " collided with: " + actor2.name);
                    switch (actor2.name) {
                        case "meteorite":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            managers.Game.scoreBoard.Lives += 1;
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
                                if (Math.random() <= 0.1) {
                                    managers.Game.powerUpManager.SpawnPowerUp(actor2.Position);
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
                            actor2.Reset();
                            break;
                        case "bomb":
                            var aBomb = actor2;
                            aBomb.Collected();
                            break;
                    }
                    if (managers.Game.scoreBoard.Score == 500) {
                        managers.Game.currentState = config.Scene.LEVEL2;
                        console.log("scene changed to level 2");
                    }
                    if (managers.Game.scoreBoard.Score == 1000) {
                        managers.Game.currentState = config.Scene.LEVEL3;
                        console.log("scene changed to level 3");
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