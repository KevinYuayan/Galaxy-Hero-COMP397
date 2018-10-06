//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    // State Objects
    let currentScene:objects.Scene;
    let currentState:config.Scene;
    
    // Game objects

    let assetManifest = [
        {id: "startButton", src: "./Assets/images/startButton.png"},
        {id: "restartButton", src: "./Assets/images/restartButton.png"},
        {id: "player", src: "./Assets/images/player.png"},
        {id: "planet", src: "./Assets/images/planet.png"},
        {id: "meteorite", src: "./Assets/images/meteorite.png"},
        {id: "enemies", src: "./Assets/images/enemies.png" },
        {id: "spaceBackground", src: "./Assets/images/spaceBackground.jpg"},
        {id: "startBackground", src: "./Assets/images/startBackground.jpg"},
        {id: "engineSound", src: "./Assets/audio/engine.ogg"},
        {id: "thunderSound", src: "./Assets/audio/thunder.ogg"},
        {id: "yaySound", src: "./Assets/audio/yay.ogg"}        
    ]


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;// creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound) // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in the assetManifest
        assetManager.on("complete", Start); // Calls start when assets are finished loading
    }

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
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
    function Update():void {
        
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