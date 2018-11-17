var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        /**
         * Creates an instance of ScoreBoard.
         * @param {boolean} [isGameOver=false]
         */
        function ScoreBoard(livesNum, scoreNum, highScoreNum, bombsNum) {
            if (livesNum === void 0) { livesNum = 5; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (highScoreNum === void 0) { highScoreNum = 0; }
            if (bombsNum === void 0) { bombsNum = 1; }
            this.Start();
            this.Lives = livesNum;
            this.Score = scoreNum;
            this.HighScore = highScoreNum;
            this.Bombs = bombsNum;
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
        // private methods
        // public methods
        // Initialize Objects
        ScoreBoard.prototype.Start = function () {
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 350, 10, false);
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 10, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", 320, 140, true);
            this._bombsLabel = new objects.Label("Bombs: 9", "30px", "Consolas", "#FFFF00", 20, 40, false);
        };
        ScoreBoard.prototype.AddGameUI = function (currentScene) {
            currentScene.addChild(this._livesLabel);
            currentScene.addChild(this._scoreLabel);
            currentScene.addChild(this._bombsLabel);
        };
        ScoreBoard.prototype.AddHighScore = function (currentScene) {
            currentScene.addChild(this._highScoreLabel);
        };
        ScoreBoard.prototype.Reset = function (livesNum, scoreNum, bombsNum) {
            if (livesNum === void 0) { livesNum = 5; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (bombsNum === void 0) { bombsNum = 1; }
            this.Lives = livesNum;
            this.Score = scoreNum;
            this.Bombs = bombsNum;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map