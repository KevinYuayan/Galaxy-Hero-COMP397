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
                    console.log("collided with: " + actor2.name);
                    switch (actor2.name) {
                        case "meteorite":
                        case "planet":
                        case "boss":
                            createjs.Sound.play("explosion01");
                            console.log("explosion01 sound");
                            managers.Game.scoreBoard.Lives -= 1;
                            if (managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                            if (managers.Game.scoreBoard.Score == 500) {
                                managers.Game.currentState = config.Scene.LEVEL2;
                                console.log("scene changed to level 2");
                            }
                            if (managers.Game.scoreBoard.Score == 1000) {
                                managers.Game.currentState = config.Scene.LEVEL3;
                                console.log("scene changed to level 3");
                            }
                            break;
                        case "enemies":
                            createjs.Sound.play("explosion02");
                            managers.Game.scoreBoard.Score += 100;
                            break;
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map