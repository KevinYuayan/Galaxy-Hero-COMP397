//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    // State Objects
    let currentScene:objects.Scene;
    let currentState:config.Scene;
    
    let scoreBoard:managers.ScoreBoard;
    
    let textureMap:createjs.SpriteSheet;

    // Game objects

    // Utility variables
    let imagePath:string = "./Assets/images/"
    let audioPath:string = "./Assets/audio/"
    let assetManifest = [
        {id: "startButton", src: imagePath + "button_start.png"},
        {id: "restartButton", src: imagePath + "button_restart.png"},
        {id: "menuButton", src: imagePath + "button_menu.png"},
        {id: "instructionsButton", src: imagePath + "button_instructions.png"},
        {id: "player", src: imagePath + "player.png"},
        {id: "planet", src: imagePath + "planet.png"},
        {id: "bomb", src: imagePath + "bomb.png"},
        {id: "tshot", src: imagePath + "t_icon.PNG"},
        {id: "meteorite", src: imagePath + "meteorite.png"},
        {id: "life", src: imagePath + "life.png"},
        {id: "enemies", src: imagePath + "enemies.png" },
        {id: "enemyLvl03_01", src: imagePath + "enemy_lvl_03_01.png" },
        {id: "enemyLvl03_02", src: imagePath + "enemy_lvl_03_02.png" },
        {id: "boss", src: imagePath + "boss.png" },
        {id: "shockwave", src: imagePath + "empty.png" },
        {id: "boss1", src: imagePath + "boss_1.png" },
        {id: "panel", src: imagePath + "panel.png"},
        {id: "spaceBackground", src: imagePath + "spaceBackground.jpg"},
        {id: "startBackground", src: imagePath + "startBackground.jpg"},
        {id: "instructionsBackground", src: imagePath + "instructionsBG.jpg"},
        {id: "alienBackground", src: imagePath + "alien_bg_test_02.jpg"},
        {id: "bullet", src: imagePath + "bullet_01.png" },
        {id: "engineSound", src: audioPath + "engine.ogg"},
        {id: "thunderSound", src: audioPath + "thunder.ogg"},
        {id: "explosion01", src: audioPath + "aiwha__explosion.wav"},
        {id: "explosion02", src: audioPath + "explosion.wav"},
        {id: "spaceship", src: audioPath + "spaceship.m4a"},
        //todo rename all occurences of yaySound
        {id: "yaySound", src: audioPath + "space-power-up.wav"},
        {id: "bullet", src: imagePath + "bullet_01.png"},
        {id: "earthBackground", src: imagePath + "earthbackground.png"},
        {id: "enemyLvl01_01", src: imagePath + "enemy_lvl_01_01.png" },
        // {id: "water", src: imagePath + "lvl1_score_01.png"},
        {id: "water", src: imagePath + "lvl1_score_02.png"},
        // {id: "water", src: imagePath + "lvl1_score_03.gif"},
        // {id: "loading", src: imagePath + "loading.gif"}
        // {id: "loading", src: imagePath + "clMqQGC.gif"}
        {id: "loading", src: imagePath + "loading-lg.gif"},
        //{id: "water", src: imagePath + "lvl1_score_03.gif"}
        { id: "textureMap", src: "./Assets/sprites/texturemap.png" },
        {id: "explosion00", src: audioPath + "explosion00.wav"},
        {id: "lg_powerup", src: audioPath + "lg_powerup.wav"}
    ]


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;// creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound) // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in the assetManifest
        assetManager.on("complete", Start); // Calls start when assets are finished loading
    }

    function Start():void {
        // managers.Game.currentScene = this;
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        let textureData = {
            images: [assetManager.getResult("textureMap")],
        
            "frames": [
              [1, 1, 16, 16, 0, 0, 0],
              [19, 1, 226, 178, 0, 0, 0],
              [247, 1, 44, 40, 0, 0, 0],
              [293, 1, 44, 40, 0, 0, 0],
              [339, 1, 44, 40, 0, 0, 0],
              [385, 1, 44, 40, 0, 0, 0],
              [431, 1, 44, 40, 0, 0, 0],
              [1, 181, 44, 40, 0, 0, 0],
              [47, 181, 44, 40, 0, 0, 0],
              [93, 181, 44, 40, 0, 0, 0],
              [139, 181, 44, 40, 0, 0, 0],
              [185, 181, 44, 40, 0, 0, 0],
              [231, 181, 93, 74, 0, 0, 0],
              [326, 181, 93, 74, 0, 0, 0],
              [1, 257, 93, 74, 0, 0, 0],
              [96, 257, 65, 65, 0, 0, 0],
              [163, 257, 65, 65, 0, 0, 0],
              [230, 257, 65, 65, 0, 0, 0],
              [297, 257, 65, 65, 0, 0, 0],
              [364, 257, 65, 65, 0, 0, 0],
              [431, 257, 65, 65, 0, 0, 0],
              [1, 333, 65, 65, 0, 0, 0],
              [68, 333, 62, 63, 0, 0, 0],
              [132, 333, 65, 65, 0, 0, 0],
              [199, 333, 65, 65, 0, 0, 0],
              [266, 333, 65, 65, 0, 0, 0],
              [333, 333, 145, 47, 0, 0, 0],
              [1, 400, 145, 47, 0, 0, 0]
          ],
        
            animations: {
              bullet: { frames: [0] },
              explosion: {
                frames: [15, 16, 17, 18, 19, 20, 21],
                speed: 0.1
              },
              restartButton: { frames: [26] },
              startButton: { frames: [27] }
            }
          };
          
        // setup global spritesheet
        textureMap = new createjs.SpriteSheet(textureData);
        managers.Game.textureMap = textureMap;
        
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;

        // TODO Change back to start
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();

    }

    // this is the main game loop
    function Update():void {
        currentScene.Update();
        if(currentState != managers.Game.currentState){
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
        currentScene.Update();

    }

    function Main():void {
        if(currentScene != null){
            currentScene.Destroy();
            stage.removeAllChildren();
        }

        switch(currentState) {
            case config.Scene.START:
            currentScene = new scenes.Start;
            break;
            case config.Scene.INSTRUCTIONS:
            currentScene = new scenes.Instructions;
            break;
            case config.Scene.INTERMISSION:
            currentScene = new scenes.Intermission;
            break;
            case config.Scene.LEVEL1:
            currentScene = new scenes.Level1;
            break;
            case config.Scene.LEVEL2:
            currentScene = new scenes.Level2;
            break;
            case config.Scene.LEVEL3:
            currentScene = new scenes.Level3;
            break;
            case config.Scene.WIN:
            currentScene = new scenes.Over(true);
            break;
            case config.Scene.OVER:
            currentScene = new scenes.Over();
            break;
        }
        managers.Game.currentScene = currentScene;
        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();