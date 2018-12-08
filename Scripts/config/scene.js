var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INSTRUCTIONS"] = 1] = "INSTRUCTIONS";
        Scene[Scene["INTERMISSION"] = 2] = "INTERMISSION";
        Scene[Scene["LEVEL1"] = 3] = "LEVEL1";
        Scene[Scene["LEVEL2"] = 4] = "LEVEL2";
        Scene[Scene["LEVEL3"] = 5] = "LEVEL3";
        Scene[Scene["WIN"] = 6] = "WIN";
        Scene[Scene["OVER"] = 7] = "OVER";
        Scene[Scene["SCENE_COUNT"] = 8] = "SCENE_COUNT";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map