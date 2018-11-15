module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(actor1: objects.GameObject, actor2: objects.GameObject): void {

            if (!actor2.IsColliding) {
                let distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                let totalHeight = actor1.HalfHeight + actor2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    actor2.IsColliding = true;
                    console.log("collided with: " + actor2.name);

                    switch(actor2.name) {
                        case "bullet":
                            createjs.Sound.play("explosion01");
                            managers.Game.scoreBoard.Lives -= 1;
                            console.log("lives after collision: " + managers.Game.scoreBoard.Lives);
                            if(managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                        break;
                        case "meteorite":
                            createjs.Sound.play("explosion01");
                            managers.Game.scoreBoard.Lives -= 1;
                            console.log("lives after collision: " + managers.Game.scoreBoard.Lives);
                            if(managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                        break;  
                        case "boss":
                        
                        break;
                        case "enemies":
                            createjs.Sound.play("explosion02");
                            managers.Game.scoreBoard.Lives -= 1;
                            console.log("lives after collision: " + managers.Game.scoreBoard.Lives);
                            if(managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                        break;

                        case "planet":
                            managers.Game.scoreBoard.HighScore += 100;
                        break;
                    }
                }
            }
        }
    }
}