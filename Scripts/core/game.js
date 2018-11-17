//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    // State Objects
    var currentScene;
    var currentState;
    var scoreBoard;
    // Game objects
    // Utility variables
    var imagePath = "./Assets/images/";
    var audioPath = "./Assets/audio/";
    var assetManifest = [
        { id: "startButton", src: imagePath + "startButton.png" },
        { id: "restartButton", src: imagePath + "restartButton.png" },
        { id: "player", src: imagePath + "player.png" },
        { id: "planet", src: imagePath + "planet.png" },
        { id: "meteorite", src: imagePath + "meteorite.png" },
        { id: "enemies", src: imagePath + "enemies.png" },
        { id: "boss", src: imagePath + "boss.png" },
        { id: "spaceBackground", src: imagePath + "spaceBackground.jpg" },
        { id: "startBackground", src: imagePath + "startBackground.jpg" },
        { id: "bullet", src: imagePath + "bullet_03.png" },
        { id: "engineSound", src: audioPath + "engine.ogg" },
        { id: "thunderSound", src: audioPath + "thunder.ogg" },
        { id: "explosion01", src: audioPath + "explosion14.m4a" },
        { id: "explosion02", src: audioPath + "explosion19.m4a" },
        { id: "spaceship", src: audioPath + "spaceship.m4a" },
        { id: "yaySound", src: audioPath + "yay.ogg" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        // setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;
        // setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        // clean up current scene
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map