module scenes {
    export class Level1 extends objects.Level {
        // private instance variables
        private _enemy_01_01: objects.EnemyLvl01_01[];
        private _water:objects.Water;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            // adds backgrounds to the stage
            for (let count = 0; count < this._backgroundNum; count++) {
                this.addChild(this._backgrounds[count]);
            }

            // adds water to the scene
            this.addChild(this._water);

            // adds player to the stage
            this.addChild(this._player);

            this.addChild(this._shockwave.shockwaveShape);

            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(bullet => {
                this.addChild(bullet);
            });

            // adds powerUps to the scene
            this._powerUpManager.PowerUps.forEach(powerUp => {
                this.addChild(powerUp);
            });


            //adds enemies to the scene
            for (let count = 0; count < this._enemiesNum; count++) {
                this.addChild(this._enemy_01_01[count])
            }

            // adds bullets to the scene
            this._bulletManager.Bullets.forEach(bullet => {
                this.addChild(bullet);
            });

            this.addChild(this._panel);

            // this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard.AddGameUI(this);
        }
        public Start(): void {
            // managers.Game.scoreBoard.Reset();
            // managers.Game.scoreBoard.Level += 1;

            this._backgroundNum = 2;
            this._enemiesNum = 2;

            // instantiates background array
            this._backgrounds = new Array<objects.Background>();
            // creates 2 backgrounds to have an infinte scroller
            for (let count = 0; count < this._backgroundNum; count++) {
                this._backgrounds[count] = new objects.Background("earthBackground", config.Constants.verticalPlaySpeed);
            }
            // Places the second background in the Reset position instead of the Start position
            this._backgrounds[1].Reset();

            this._water = new objects.Water();

            this._player = new objects.Player();
            managers.Game.player = this._player;

            this._shockwave = new objects.Shockwave();
            managers.Game.shockwave = this._shockwave;

            // must do this to instantiate the array
            this._planets = new Array<objects.Planet>();
            this._enemy_01_01 = new Array<objects.EnemyLvl01_01>();
            
            for (let count = 0; count < this._enemiesNum; count++) {
                this._enemy_01_01[count] = new objects.EnemyLvl01_01();
            }
            this._engineSound = createjs.Sound.play("spaceship");
            this._engineSound.volume = 0.3;
            this._engineSound.loop = -1;

            // instantiates a new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;

            // instantiates a new powerUp manager
            this._powerUpManager = new managers.PowerUps();
            managers.Game.powerUpManager = this._powerUpManager;
            
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            
            this.SetupInput();

            this.Main();
        }

        public SetupInput(): void {
            managers.Input.Start();
            this.on("mousedown", managers.Input.OnLeftMouseDown);
            document.addEventListener("keydown", managers.Input.KeyPressed);
        }

        public Update(): void {
            managers.Input.gamepad1.Update();
            if((managers.Input.gamepad1.Buttons[0]) && (createjs.Ticker.getTicks() % 7 == 0)) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }

            this._player.Update();

            this._shockwave.Update();
            this._water.Update();
            managers.Collision.Check(this._player, this._water);

            // updates each planet in array
            this._planets.forEach(planet => {
                planet.Update();
                managers.Collision.Check(this._player, planet);
            });
            // updates each enemy in array
            this._enemy_01_01.forEach(enemy => {
                enemy.Update();
                managers.Collision.Check(this._player, enemy);
            });

            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(bullet => {
                managers.Collision.Check(this._shockwave, bullet);
                managers.Collision.Check(this._player, bullet);
                this._enemy_01_01.forEach(enemy => {
                    managers.Collision.Check(bullet, enemy);
                });
            });

            this._powerUpManager.Update();
            this._powerUpManager.PowerUps.forEach(powerUp => {
                managers.Collision.Check(this._player, powerUp);
            });

            // updates background 0
            if (this._backgrounds[1].y >= 0 || this._backgrounds[1].y <= config.Constants.canvasHeight - this._backgrounds[1].Height) {
                this._backgrounds[0].Update();
            }

            // updates background 1
            if (this._backgrounds[0].y >= 0 || this._backgrounds[0].y <= config.Constants.canvasHeight - this._backgrounds[0].Height) {
                this._backgrounds[1].Update();
            }

            this._panel.Update();
        }
        public Reset(): void { }

        public Destroy(): void {
            this.removeAllChildren();
            this._engineSound.stop();
            this.off("mousedown",managers.Input.OnLeftMouseDown);
            document.removeEventListener("keydown", managers.Input.KeyPressed);
        }
        

    }
}