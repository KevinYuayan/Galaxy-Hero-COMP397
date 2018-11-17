module objects {
    export abstract class Scene extends createjs.Container {
        // private instance variables

        // public properties

        // constructor
        constructor() {
            super();
        }

        // private methods

        // public methods

        public abstract Start():void;

        public abstract Update():void;

        public abstract Destroy():void;

        public abstract Reset():void;

        public abstract Main():void;
    }
}