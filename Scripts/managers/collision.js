var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (actor1, actor2) {
            if (!actor2.IsColliding) {
                var distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                var totalHeight = actor1.HalfHeight + actor2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    actor2.IsColliding = true;
                    console.log("collided with: " + actor2.name);
                    switch (actor2.name) {
                        case "meteorite":
                            createjs.Sound.play("explosion01");
                            console.log("explosion01 sound");
                            break;
                        case "enemies":
                            createjs.Sound.play("thunderSound");
                            break;
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map