const Game = require('./game');
const Field = require('./field');

const hat = '^';
const hole = 'O';
const field = '░';
const path = '*';

describe('Game', () => {
  describe('play', () => {
    it('prints the initial field when the game starts', () => {
      const grid = [
        [path, field],
        [field, hat],
      ];
      const f = new Field(grid);
      const mockPrompt = jest.fn().mockReturnValue('q');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const game = new Game(f, mockPrompt);

      game.play();

      expect(consoleSpy).toHaveBeenCalledWith('*░');
      consoleSpy.mockRestore();
    });

    it('prints the updated field after each move', () => {
      const grid = [
        [path, field, field],
        [field, field, hat],
      ];
      const f = new Field(grid);
      const mockPrompt = jest.fn()
        .mockReturnValueOnce('r')
        .mockReturnValue('q');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const game = new Game(f, mockPrompt);

      game.play();

      expect(consoleSpy).toHaveBeenCalledWith('**░');
      consoleSpy.mockRestore();
    });
  });
});
