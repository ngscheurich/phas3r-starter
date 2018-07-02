import Keys from '../util/keys'

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: Keys.SCENE_BOOT })
  }

  private preload(): void {
    this.load.on('complete', () => this.scene.start(Keys.SCENE_GAME))

    this.load.image(Keys.IMAGE_SKY, 'assets/sky.png')
    this.load.image(Keys.IMAGE_GROUND, 'assets/platform.png')
    this.load.image(Keys.IMAGE_STAR, 'assets/star.png')
    this.load.image(Keys.IMAGE_BOMB, 'assets/bomb.png')
    this.load.spritesheet(Keys.IMAGE_DUDE, 'assets/dude.png', {
      frameHeight: 48,
      frameWidth: 32,
    })
  }
}

export default BootScene
