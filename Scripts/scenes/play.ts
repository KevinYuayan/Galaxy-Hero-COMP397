namespace scenes {
    export class Play extends objects.Scene {
      // private instance variable
      private _player: objects.Player;
      private _bg: objects.Background;
      private _planet: objects.Planet;
  
      private _meteoriteNum: number;
      private _meteorites: objects.Meteorite[];
  
      private _enemy: objects.Enemies;
  
      private _engineSound: createjs.AbstractSoundInstance;
  
      private _bulletManager: managers.BulletMNGR;
  
      // public properties
  
      // constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      public Start(): void {
        this._meteoriteNum = 1;
  
        // Instantiates a new Array container of Type objects.Cloud
        this._meteorites = new Array<objects.Meteorite>();
  
        // Fill the Cloud Array with Clouds
        for (let count = 0; count < this._meteoriteNum; count++) {
          this._meteorites[count] = new objects.Meteorite();
        }
  
  
        // play background engine sound when the level starts
        this._engineSound = createjs.Sound.play("spaceship");
        this._engineSound.volume = 0.1;
        this._engineSound.loop = -1; // loop forever
  
        // instantiates a new bullet manager
        this._bulletManager = new managers.BulletMNGR();
        managers.Game.bulletManager = this._bulletManager;
  
        this.Main();
      }
  
      public Update(): void {
        this._bg.Update();
        this._player.Update();
        this._planet.Update();
  
        // check if player and island are colliding
        managers.Collision.Check(this._player, this._planet);
  
        // Update Each cloud in the Cloud Array
        this._meteorites.forEach(cloud => {
          cloud.Update();
          managers.Collision.Check(this._player, cloud);
        });
  
        this._enemy.Update();
        managers.Collision.Check(this._player, this._enemy);
  
        this._bulletManager.Update();
        this._bulletManager.Bullets.forEach(bullet => {
          managers.Collision.Check(this._player, bullet);
        });
      }
  
      public Destroy(): void {
        this.removeAllChildren();
        this._engineSound.stop();
        // TODO: Clean up bullet manager
      }
  
      public Reset(): void {}
  
      public Main(): void {
        // adds bg to the scene
        this._bg = new objects.Background();
        this.addChild(this._bg);
  
        // adds planet to the scene
        this._planet = new objects.Planet();
        this.addChild(this._planet);
  
  
        this._enemy = new objects.Enemies();
        this.addChild(this._enemy);
  
        // adds player to the scene
        this._player = new objects.Player();
        this.addChild(this._player);
  
        // adds bullets to the scene
        this._bulletManager.Bullets.forEach(bullet => {
          this.addChild(bullet);
        });
  
        // adds Each Cloud in the Cloud Array to the Scene
        this._meteorites.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add ScoreBoard UI to the Scene
        managers.Game.scoreBoard.AddGameUI(this);
      }
    }
  }