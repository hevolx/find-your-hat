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

    it('moves in the direction given by the prompt', () => {
      const grid = [
        [path, field],
        [field, hat],
      ];
      const f = new Field(grid);
      const mockPrompt = jest.fn()
        .mockReturnValueOnce('d')
        .mockReturnValue('q');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const game = new Game(f, mockPrompt);

      game.play();

      expect(consoleSpy).toHaveBeenCalledWith('*^');
      consoleSpy.mockRestore();
    });

    it('notifies the player and ends the game when they find the hat', () => {
      const grid = [
        [path, field],
        [field, hat],
      ];
      const f = new Field(grid);
      const mockPrompt = jest.fn()
        .mockReturnValueOnce('d')
        .mockReturnValueOnce('r');
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const game = new Game(f, mockPrompt);

      game.play();

      expect(consoleSpy).toHaveBeenCalledWith('Du hittade hatten! Du vann!');
      expect(mockPrompt).toHaveBeenCalledTimes(2);
      consoleSpy.mockRestore();
    });
  });
});
