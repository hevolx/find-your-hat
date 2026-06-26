const Field = require('./field');

class Game {
  constructor(field) {
    this.field = field;
  }

  play() {
    this.field.print();
  }
}

module.exports = Game;
