module managers {
    export class Input {
        public static LeftButtonDown:boolean = false;


        public static OnLeftMouseDown(event) {
            if(event.nativeEvent.button == 0) {
                // managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
                managers.Game.player.Fire();
              }
        }
    }
}