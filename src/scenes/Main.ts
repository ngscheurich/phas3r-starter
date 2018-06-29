export default class Main extends Phaser.Scene {
  constructor() {
    super({ key: 'Main' })
  }

  private create(): void {
    this.add.text(20, 20, 'Hello world!')
  }
}
