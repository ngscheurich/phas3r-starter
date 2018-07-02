import Keys from './keys';

export default function loadAnimations(scene: Phaser.Scene) {
  scene.anims.create({
    key: Keys.ANIM_PLAYER_LEFT,
    frames: scene.anims.generateFrameNumbers(Keys.IMAGE_DUDE, {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: Keys.ANIM_PLAYER_RIGHT,
    frames: scene.anims.generateFrameNumbers(Keys.IMAGE_DUDE, {
      start: 5,
      end: 8,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: Keys.ANIM_PLAYER_IDLE,
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  });
}
