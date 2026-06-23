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
        if (this.col >= this.field[0].length) {
          return 'out-of-bounds'
        }
        break;

      case 'l':
        this.field[this.col--];
        if (this.col < 0) {
          return 'out-of-bounds'
        }
        break;


      case 'd':
        this.field[this.row++];
        if (this.row >= this.field.length) {
          return 'out-of-bounds'
        }
        break;

      case 'u':
        this.field[this.row--];
        if (this.row < 0) {
          return 'out-of-bounds'
        }
        break;
    }

    if (this.field[this.row][this.col] == this.hat) {
      return 'win'
    } else if (this.field[this.row][this.col] == this.hole) {
      return 'lose'
    } else {
      this.field[this.row][this.col] = this.pathCharacter;
    }
  }

  static generateField(height, width, percentage = 0) {
    let map = [];
    for (let i = 0; i < height; i++) {
      map.push(new Array(width).fill(fieldCharacter));
    }

    const rndHeight = Math.floor(Math.random() * height);
    const rndWidth = Math.floor(Math.random() * width);
    map[rndHeight][rndWidth] = hat;

    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        if (map[r][c] !== hat && Math.random() < percentage) {
          map[r][c] = hole;
        }
      }
    }

    return map;
  }
}

module.exports = Field;
