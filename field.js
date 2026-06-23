const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(grid) {
    this.field = grid;
    this.hat = hat;
    this.hole = hole;
    this.fieldCharacter = fieldCharacter;
    this.pathCharacter = pathCharacter;
    this.row = 0;
    this.col = 0;
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      let result = this.field[i].join('');
      console.log(result);
    }
  }

  move(input) {
    switch (input) {
      case 'r':
        this.field[this.col++];
        break;

      case 'l':
        this.field[this.col--];
        break;

      case 'u':
        this.field[this.row++];
        break;

      case 'd':
        this.field[this.row--];
        break;
    }

    if (this.field[this.row][this.col] == this.hat) {
      return 'win'
    } else {
      this.field[this.row][this.col] = this.pathCharacter;
    }
  }
}

module.exports = Field;
