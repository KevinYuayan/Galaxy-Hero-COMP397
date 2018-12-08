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
                    //console.log(actor1.name + " collided with: " + actor2.name);
                    switch (actor2.name) {
                        case "meteorite":
                        case "water":
                        case "life":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.3;
                            managers.Game.scoreBoard.Score += 50;
                            managers.Game.scoreBoard.Lives += 1;
                            break;
                        // case "planet":
                        case "boss":
                            var explosionSound = createjs.Sound.play("explosion01");
                            explosionSound.volume = 0.1;
                            if (actor1.name == "bullet" && managers.Game.scoreBoard.Level == 3) {
                                //if (actor1.name == "bullet" && managers.Game.currentState == config.Scene.LEVEL3) {    
                                var aBullet = actor1;
                                if (aBullet.Direction.y < 0) {
                                    var aBoss = actor2;
                                    aBoss.lostLife();
                                    Collision.createExplosion(aBoss);
                                    if (aBoss.Lives <= 0) {
                                        managers.Game.scoreBoard.Score += 5000;
                                        managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                        managers.Game.currentState = config.Scene.WIN;
                                    }
                                }
                            }
                            else {
                                managers.Game.scoreBoard.Lives -= 1;
                                Collision.createExplosion(actor1);
                            }
                            break;
                        case "enemies":
                        case "enemyLvl03_01":
                        case "enemyLvl03_02":
                        case "enemyLvl01_01":
                            if (actor1.name == "bullet") {
                                var bullet = actor1;
                                if (bullet.Direction.y < 0) {
                                    explosionSound = createjs.Sound.play("explosion01");
                                    explosionSound.volume = 0.1;
                                    managers.Game.scoreBoard.Score += 100;
                                    // 10% chance for Bomb to spawn when enemy dies
                                    if (Math.random() <= 0.1) {
                                        managers.Game.powerUpManager.SpawnPowerUp(actor2.Position);
                                    }
                                    Collision.createExplosion(actor1);
                                    actor2.Reset();
                                    actor1.Reset();
                                }
                                else {
                                    actor2.IsColliding = false;
                                }
                            }
                            // else {
                            //     explosionSound = createjs.Sound.play("explosion02");
                            //     explosionSound.volume = 0.1;
                            //     managers.Game.scoreBoard.Lives -= 1;
                            //     // actor2.Reset();
                            // }
                            if (actor1.name == "player") {
                                explosionSound = createjs.Sound.play("explosion02");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Lives -= 1;
                                Collision.createExplosion(actor1);
                                actor2.Reset();
                            }
                            else {
                                actor2.IsColliding = false;
                            }
                            break;
                        case "bullet":
                            if (actor1.name == "shockwave") {
                                console.log("bullet hit shockwave");
                                actor2.Reset();
                            }
                            else {
                                explosionSound = createjs.Sound.play("explosion02");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Lives -= 1;
                                actor2.Reset();
                                Collision.createExplosion(actor1);
                            }
                            break;
                        case "bullet":
                            explosionSound = createjs.Sound.play("explosion02");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            Collision.createExplosion(actor1);
                            actor2.Reset();
                            break;
                        case "bomb":
                            var aBomb = actor2;
                            aBomb.Collected();
                            break;
                        case "tshot":
                            var tShot = actor2;
                            tShot.Collected();
                            break;
                    }
                    if (managers.Game.scoreBoard.Score >= 1000 && managers.Game.scoreBoard.Score < 2000 && (managers.Game.scoreBoard.Level == 1)) {
                        // managers.Game.currentState = config.Scene.LEVEL2;
                        managers.Game.currentState = config.Scene.INTERMISSION;
                        managers.Game.scoreBoard.Level = 2;
                    }
                    if (managers.Game.scoreBoard.Score >= 2000 && (managers.Game.scoreBoard.Level <= 2)) {
                        // managers.Game.currentState = config.Scene.LEVEL3;
                        managers.Game.currentState = config.Scene.INTERMISSION;
                        managers.Game.scoreBoard.Level = 3;
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
        Collision.createExplosion = function (actor1) {
            var newExplosion = new objects.Explosion();
            newExplosion.x = actor1.x;
            newExplosion.y = actor1.y;
            managers.Game.currentScene.addChild(newExplosion);
            newExplosion.on("animationend", function () {
                newExplosion.Destroy();
                newExplosion = null;
            });
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map