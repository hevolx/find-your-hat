const Field = require('./field');

class Game {
  constructor(field, prompt) {
    this.field = field;
    this.prompt = prompt;
  }

  play() {
    this.field.print();
    let result;
    do {
      const input = this.prompt();
      if (input === 'q') break;
      result = this.field.move(input);
      this.field.print();
    } while (!result);
    if (result === 'win') {
      console.log('Du hittade hatten! Du vann!');
    } else if (result === 'lose') {
      console.log('Du föll i ett hål! Game over.');
    }
  }
}

module.exports = Game;
