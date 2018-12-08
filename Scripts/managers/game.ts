module managers {
    export class Game {
        // Global
        public static assetManager:createjs.LoadQueue;
        public static stage:createjs.Stage;
        public static currentState:config.Scene;
        public static scoreBoard:managers.ScoreBoard;
        public static bulletManager: managers.Bullet;
        public static powerUpManager: managers.PowerUps;
        public static player: objects.Player;
        public static currentScene: objects.Scene;
        public static shockwave:objects.Shockwave;
        public static textureMap: createjs.SpriteSheet;
    }
}