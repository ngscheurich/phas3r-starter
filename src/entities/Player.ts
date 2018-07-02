import { Input, Physics } from 'phaser';
import Keys from '../util/keys';

interface IParams {
  scene: Phaser.Scene;
  x: number;
  y: number;
}

class Player extends Physics.Arcade.Sprite {
  private params: IParams;
  private cursors: CursorKeys;

  constructor(params: IParams) {
    super(params.scene, params.x, params.y, Keys.IMAGE_DUDE);

    params.scene.physics.world.enable(this);
    params.scene.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    this.cursors = params.scene.input.keyboard.createCursorKeys();
  }

  public update(): void {
    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play(Keys.ANIM_PLAYER_LEFT, true);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
      this.anims.play(Keys.ANIM_PLAYER_RIGHT, true);
    } else {
      this.setVelocityX(0);
      this.anims.play(Keys.ANIM_PLAYER_IDLE);
    }
    if (this.cursors.space.isDown && this.body.touching.down) {
      this.setVelocityY(-330);
    }
  }
}

export default Player;
