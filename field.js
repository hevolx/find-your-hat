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
}

module.exports = Field;
