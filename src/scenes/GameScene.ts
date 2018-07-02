import { GameObjects, Physics } from 'phaser'
import Bomb from '../entities/Bomb'
import Player from '../entities/Player'
import loadAnimations from '../util/animations'
import Keys from '../util/keys'

class GameScene extends Phaser.Scene {
  private platforms: Physics.Arcade.StaticGroup
  private stars: Physics.Arcade.Group
  private player: Player
  private bombs: Physics.Arcade.Group
  private score: number = 0
  private scoreText: GameObjects.Text

  constructor() {
    super({ key: Keys.SCENE_GAME })
  }

  public update(): void {
    this.player.update()
  }

  private create(): void {
    loadAnimations(this)

    this.add.image(400, 300, Keys.IMAGE_SKY)
    this.addPlatforms()
    this.addStars()

    this.player = new Player({ scene: this, x: 100, y: 450 })
    this.physics.add.collider(this.player, this.platforms)
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar.bind(this)
    )

    this.bombs = this.physics.add.group()
    this.physics.add.collider(this.bombs, this.platforms)
    this.physics.add.overlap(this.player, this.bombs, this.hitBomb, null, this)

    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: 32,
      fill: '#000',
    })
  }

  private addPlatforms(): void {
    this.platforms = this.physics.add.staticGroup()
    this.platforms
      .create(400, 568, Keys.IMAGE_GROUND)
      .setScale(2)
      .refreshBody()
    this.platforms.create(600, 400, Keys.IMAGE_GROUND)
    this.platforms.create(50, 250, Keys.IMAGE_GROUND)
    this.platforms.create(750, 220, Keys.IMAGE_GROUND)
  }

  private addStars(): void {
    this.stars = this.physics.add.group({
      key: Keys.IMAGE_STAR,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    })

    this.stars.children.iterate(
      child => child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)),
      this
    )

    this.physics.add.collider(this.stars, this.platforms)
  }

  private collectStar(
    player: Physics.Arcade.Sprite,
    star: Physics.Arcade.Sprite
  ) {
    star.disableBody(true, true)
    this.score += 10
    this.scoreText.setText('Score: ' + this.score)

    const x =
      this.player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400)

    const bomb = new Bomb({ scene: this, group: this.bombs, x })
  }

  private hitBomb(player: Physics.Arcade.Sprite, bomb: Physics.Arcade.Sprite) {
    this.physics.pause()
    this.player.setTint(0xff0000)
    this.player.anims.play(Keys.ANIM_PLAYER_IDLE)
  }
}

export default GameScene
