import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor(gameConfig: GameConfig) {
    super(gameConfig);
  }
}

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    arcade: {
      debug: false,
      gravity: { y: 300 },
    },
    default: 'arcade',
  },
  scene: [BootScene, GameScene],
};

window.onload = () => new Game(config);
