module objects{
    export abstract class Scene extends createjs.Container{
        // Private instance variables

        // Public properties

        // Constructor

        constructor() {
            super();
        }
        // Private methods

        // Public methods
        public abstract Main():void;

        public abstract Start():void;

        public abstract Update():void;

        public abstract Reset():void;

        public Destroy():void{
            this.removeAllChildren();
        }


    }
}