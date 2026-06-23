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

  describe('print', () => {
    it('logs each row of the field as a string', () => {
      const grid = [
        [path, field],
        [field, hat],
      ];
      const f = new Field(grid);
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

      f.print();

      expect(consoleSpy).toHaveBeenCalledWith('*░');
      expect(consoleSpy).toHaveBeenCalledWith('░^');
      consoleSpy.mockRestore();
    });
  });

  describe('move', () => {
    it('moving right updates the field to mark the new position', () => {
      const grid = [
        [path, field, field],
        [field, field, field],
      ];
      const f = new Field(grid);

      f.move('r');

      expect(f.field[0][1]).toBe(path);
    });

    it('returns "win" when the player moves onto the hat', () => {
      const grid = [
        [path, hat],
      ];
      const f = new Field(grid);

      const result = f.move('r');

      expect(result).toBe('win');
    });
  });
});
