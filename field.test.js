const Field = require('./field');

const hat = '^';
const hole = 'O';
const field = '░';
const path = '*';

describe('Field', () => {
  describe('constructor', () => {
    it('stores the given 2D array as the field', () => {
      const grid = [
        [path, field, hat],
        [field, hole, field],
      ];

      const f = new Field(grid);

      expect(f.field).toEqual(grid);
    });
  });
});
