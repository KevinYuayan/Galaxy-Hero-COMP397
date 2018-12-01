module managers {
    export class Input {
        public static LeftButtonDown:boolean = false;


        public static OnLeftMouseDown(event) {
            if(event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
              }
        }
        

        public static KeyPressed(event) {
            if(event.keyCode == 66) {
                if (managers.Game.scoreBoard.Bombs > 0) {
                    managers.Game.scoreBoard.Bombs -= 1;
                    managers.Game.shockwave.InPlay = true;
                    setTimeout(function() {managers.Game.shockwave.InPlay = false}, 600);
                }
            }
        }
    }
}