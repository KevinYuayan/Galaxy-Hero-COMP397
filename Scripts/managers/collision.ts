module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(actor1: objects.Actor, actor2: objects.Actor): void {

            if (!actor2.IsColliding) {
                let distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                let totalHeight = actor1.HalfHeight + actor2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    actor2.IsColliding = true;

                    // switch(actor2.name) {
                    //     case "island":
                    //         createjs.Sound.play("yaySound");
                    //     break;
                    //     case "cloud":
                    //         createjs.Sound.play("thunderSound");
                    //     break;
                    // }
                }
            }
        }
    }
}