module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(actor1: objects.Actor, actor2: objects.Actor): void {

            if (!actor2.IsColliding) {
                let distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                let totalHeight = actor1.HalfHeight + actor2.HalfHeight;
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

                            break;
                        case "enemies":

                            createjs.Sound.play("explosion02");
                            if (actor1.name == "player") {
                                managers.Game.scoreBoard.Lives -= 1;
                            }
                            // else is when actor1 is a player bullet
                            else {
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

                            }
                            actor2.Destroy();
                            break;
                        case "bomb":
                            managers.Game.currentLevel.powerUp.Collected();
                            break;

                    }
                }
            }
        }
    }
}