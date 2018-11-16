module managers {
    export class Game {
        // Global
        public static assetManager:createjs.LoadQueue;
        public static stage:createjs.Stage;
        public static currentState:config.Scene;
        // public static currentScene:objects.Scene;
        public static scoreBoard:managers.ScoreBoard;
        public static bulletManager:managers.Bullet;
        public static player:objects.Player;
    }
}