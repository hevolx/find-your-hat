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
      console.clear();
      this.field.print();
    } while (!result);
    switch (result) {
      case 'win':
        console.log('Du hittade hatten! Du vann!');
        break;
      case 'lose':
        console.log('Du föll i ett hål! Game over.');
        break;
      case 'out-of-bounds':
        console.log('Du gick utanför fältet! Game over.');
        break;
    }
  }
}

module.exports = Game;
