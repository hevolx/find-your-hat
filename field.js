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
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      let result = this.field[i].join('');
      console.log(result);
    }
  }
}

module.exports = Field;
