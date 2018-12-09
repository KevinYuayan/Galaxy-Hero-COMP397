var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        /**
         * Creates an instance of ScoreBoard.
         * @param {boolean} [isGameOver=false]
         */
        function ScoreBoard(livesNum, scoreNum, highScoreNum, bombsNum, level) {
            if (livesNum === void 0) { livesNum = 10; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (highScoreNum === void 0) { highScoreNum = 0; }
            if (bombsNum === void 0) { bombsNum = 1; }
            if (level === void 0) { level = 1; }
            this.Start();
            this.Lives = livesNum;
            this.Score = scoreNum;
            this.HighScore = highScoreNum;
            this.Bombs = bombsNum;
            this.Level = level;
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            // public properties
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this._scoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Bombs", {
            get: function () {
                return this._bombs;
            },
            set: function (newValue) {
                this._bombs = newValue;
                this._bombsLabel.text = "Bombs: " + this._bombs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                this._livesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this._highScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Level", {
            get: function () {
                return this._level;
            },
            set: function (newValue) {
                this._level = newValue;
                this._levelLabel.text = "Level: " + this._level;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        // Initialize Objects
        ScoreBoard.prototype.Start = function () {
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "planet", "#FFFF00", 710, 340, false);
            this._livesLabel = new objects.Label("Lives: 99", "30px", "planet", "#FFFF00", 710, 90, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "planet", "#FFFF00", 350, 140, true);
            this._bombsLabel = new objects.Label("Bombs: 9", "30px", "planet", "#FFFF00", 710, 190, false);
            this._levelLabel = new objects.Label("Level: 9", "30px", "planet", "#FFFF00", 710, 390, false);
        };
        ScoreBoard.prototype.AddGameUI = function (currentScene) {
            currentScene.addChild(this._livesLabel);
            currentScene.addChild(this._scoreLabel);
            currentScene.addChild(this._bombsLabel);
            currentScene.addChild(this._levelLabel);
        };
        ScoreBoard.prototype.AddHighScore = function (currentScene) {
            currentScene.addChild(this._highScoreLabel);
        };
        ScoreBoard.prototype.Reset = function (livesNum, scoreNum, bombsNum, level) {
            if (livesNum === void 0) { livesNum = 10; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (bombsNum === void 0) { bombsNum = 1; }
            if (level === void 0) { level = 1; }
            this.Lives = livesNum;
            this.Score = scoreNum;
            this.Bombs = bombsNum;
            this.Level = level;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map