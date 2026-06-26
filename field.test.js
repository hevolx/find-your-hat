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

    it('returns "lose" when the player moves into a hole', () => {
      const grid = [
        [path, hole],
      ];
      const f = new Field(grid);

      const result = f.move('r');

      expect(result).toBe('lose');
    });

    it('returns "out-of-bounds" when the player moves outside the field', () => {
      const grid = [
        [path, field],
      ];
      const f = new Field(grid);

      const result = f.move('l');

      expect(result).toBe('out-of-bounds');
    });
  });

  describe('generateField', () => {
    it('returns a 2D array with the given height and width', () => {
      const result = Field.generateField(3, 5);

      expect(result).toHaveLength(3);
      expect(result[0]).toHaveLength(5);
    });

    it('contains exactly one hat', () => {
      const result = Field.generateField(4, 4);

      const hats = result.flat().filter(cell => cell === hat);

      expect(hats).toHaveLength(1);
    });

    it('contains at least one hole when percentage is given', () => {
      const result = Field.generateField(5, 5, 0.3);

      const holes = result.flat().filter(cell => cell === hole);

      expect(holes.length).toBeGreaterThanOrEqual(1);
    });

    it('marks the starting position [0][0] with the path character', () => {
      const result = Field.generateField(3, 3);

      expect(result[0][0]).toBe(path);
    });
  });
});
