module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(object1: objects.GameObject, object2: objects.GameObject): void {

            if (!object2.IsColliding) {
                let distance = util.Vector2.Distance(object1.Position, object2.Position);
                let totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;
                    console.log(object1.name + " collided with: " + object2.name);

                    switch(object2.name) {
                        case "meteorite":
                        let yaySound = createjs.Sound.play("yaySound");
                        yaySound.volume = 0.1;
                        managers.Game.scoreBoard.Score += 100;
                        break;
                        // case "planet":
                        case "boss":
                            let explosionSound = createjs.Sound.play("explosion01");
                            explosionSound.volume = 0.1;
                            console.log("explosion01 sound");
                            managers.Game.scoreBoard.Lives -= 1;
                        break;
                        case "enemies":
                            if(object1.name == "bullet"){
                                explosionSound = createjs.Sound.play("explosion01");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Score += 100;
                                object2.Reset();
                                object1.Reset(); 
                            }
                            else{
                            explosionSound = createjs.Sound.play("explosion02");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -=1;
                            }
                        break;

                        case "bullet":
                            explosionSound = createjs.Sound.play("explosion02");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -=1;
                            object2.Reset();
                        break;
                    }
                    if(managers.Game.scoreBoard.Lives <= 0) {
                        managers.Game.currentState = config.Scene.OVER;
                        if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                    }
                    

                }
            }
        }
    }
}