//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    // State Objects
    var currentScene;
    var currentState;
    // Game objects
    var assetManifest = [
        { id: "startButton", src: "/Assets/images/startButton.png" },
        { id: "restartButton", src: "/Assets/images/restartButton.png" },
        { id: "player", src: "/Assets/images/player.png" },
        { id: "planet", src: "/Assets/images/planet.png" },
        { id: "meteorite", src: "/Assets/images/meteorite.png" },
        { id: "spaceBackground", src: "/Assets/images/spaceBackground.jpg" },
        { id: "startBackground", src: "/Assets/images/startBackground.jpg" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "/Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "/Assets/audio/yay.ogg" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in the assetManifest
        assetManager.on("complete", Start); // Calls start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.Game.currentState = config.Scene.START;
        Main();
    }
    // this is the main game loop
    function Update() {
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
        currentScene.Update();
    }
    function Main() {
        if (currentScene != null) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start;
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play;
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over;
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map