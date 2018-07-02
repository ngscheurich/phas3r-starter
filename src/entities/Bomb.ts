import { Physics } from 'phaser';
import Keys from '../util/keys';

interface IParams {
  scene: Phaser.Scene;
  group: Physics.Arcade.Group;
  x: number;
}

class Bomb extends Physics.Arcade.Sprite {
  private params: IParams;

  constructor(params: IParams) {
    super(params.scene, params.x, 16, Keys.IMAGE_BOMB);

    params.scene.add.existing(this);
    params.group.add(this);

    this.setBounce(1);
    this.setCollideWorldBounds(true);
    this.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }
}

export default Bomb;
