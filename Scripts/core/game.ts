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
    // Game objects

    // Utility variables
    let imagePath:string = "./Assets/images/"
    let audioPath:string = "./Assets/audio/"
    let assetManifest = [
        {id: "startButton", src: imagePath + "startButton.png"},
        {id: "restartButton", src: imagePath + "restartButton.png"},
        {id: "player", src: imagePath + "player.png"},
        {id: "planet", src: imagePath + "planet.png"},
        {id: "bomb", src: imagePath + "bomb.png"},
        {id: "meteorite", src: imagePath + "meteorite.png"},
        {id: "enemies", src: imagePath + "enemies.png" },
        {id: "enemyLvl03_01", src: imagePath + "enemy_lvl_03_01.png" },
        {id: "enemyLvl03_02", src: imagePath + "enemy_lvl_03_02.png" },
        {id: "boss", src: imagePath + "boss.png" },
        {id: "shockwave", src: imagePath + "empty.png" },
        {id: "spaceBackground", src: imagePath + "spaceBackground.jpg"},
        {id: "startBackground", src: imagePath + "startBackground.jpg"},
        {id: "alienBackground", src: imagePath + "alien_bg_test_02.jpg"},
        {id: "bullet", src: imagePath + "bullet_01.png" },
        {id: "engineSound", src: audioPath + "engine.ogg"},
        {id: "thunderSound", src: audioPath + "thunder.ogg"},
        {id: "explosion01", src: audioPath + "explosion14.m4a"},
        {id: "explosion02", src: audioPath + "explosion19.m4a"},
        {id: "spaceship", src: audioPath + "spaceship.m4a"},
        {id: "yaySound", src: audioPath + "yay.ogg"},
        {id: "bullet", src: imagePath + "bullet_01.png"}
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

        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;

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
            //currentScene = new scenes.Instructions;
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
            case config.Scene.OVER:
            currentScene = new scenes.Over;
            break;
        }
        managers.Game.currentScene = currentScene;
        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();