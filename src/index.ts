import 'phaser'
import Main from './scenes/Main'

class Game extends Phaser.Game {
  constructor(gameConfig: GameConfig) {
    super(gameConfig)
  }
}

const config: GameConfig = {
  height: 480,
  scene: Main,
  type: Phaser.AUTO,
  width: 640,
}

window.onload = () => new Game(config)
