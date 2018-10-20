module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(actor1: objects.GameObject, object2: objects.GameObject): void {

            if (!object2.IsColliding) {
                let distance = util.Vector2.Distance(actor1.Position, object2.Position);
                let totalHeight = actor1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;
                    console.log("collided with" + object2.name);

                    switch(object2.name) {
                        case "enemy":
                            let yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                        break;
                        case "meteorite":
                            managers.Game.scoreBoard.Lives -= 1;

                            if(managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                        break;
                    }
                }
            }
        }
    }
}