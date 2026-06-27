const prompt = require('prompt-sync')({ sigint: true });

const Field = require('./field');
const Game = require('./game');

const field = new Field(Field.generateField(10, 10, 0.2));
const game = new Game(field, prompt);
game.play();