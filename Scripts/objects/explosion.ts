module objects {
    export class Explosion extends objects.SpriteGameObject {
        
        // private instance variables

        // public properties

        // constructor
        constructor() {
            super("explosion");

            this.Start();
        }

        // private methods


        // public methods

        public Reset(): void {
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update(): void {

        }

        public Destroy(): void {
            this.parent.removeChild(this);
        }

    }
}