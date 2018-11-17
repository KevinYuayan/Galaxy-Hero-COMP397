module objects {
    export abstract class PowerUp extends objects.Actor{
        destroyed:boolean;
        public abstract Collected() : void;
        private _isInPlay:boolean;

        get IsInPlay():boolean {
            return this._isInPlay;
        }

        set IsInPlay(newState:boolean) {
            this._isInPlay = newState; 
            if(!this._isInPlay) {
                this.Reset();
            }
        }
    }
}