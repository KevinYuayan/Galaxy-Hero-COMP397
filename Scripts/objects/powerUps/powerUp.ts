module objects {
    export abstract class PowerUp extends objects.Actor{
        destroyed:boolean;
        public abstract Collected() : void;
    }
}