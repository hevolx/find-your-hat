const Field = require('./field');

class Game {
  constructor(field) {
    this.field = field;
  }

  play() {
    this.field.print();
    this.field.move('r')
    this.field.print();
  }
}

module.exports = Game;
