const Field = require('./field');

class Game {
  constructor(field, prompt) {
    this.field = field;
    this.prompt = prompt;
  }

  play() {
    this.field.print();
    this.direction();
    this.field.print();
  }

  direction() {
    return this.field.move(this.prompt());
  }
}

module.exports = Game;
