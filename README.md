# Find Your Hat

An interactive terminal game where the player has lost their hat in a field full of holes. Navigate back to it without falling into a hole or stepping outside the field.

## Motivation

Built as a Codecademy project to practice object-oriented programming in Node.js and terminal-based user interaction.

## Tech

**Built with**
- Node.js
- [prompt-sync](https://github.com/heapwolf/prompt-sync)

## Features

- Randomly generated field with configurable size and hole density
- Four directions to navigate: `u` (up), `d` (down), `l` (left), `r` (right)
- Console clears after each move for a clean gameplay experience
- Clear messages on win, loss, or going out of bounds

## Symbols

| Symbol | Meaning         |
|--------|-----------------|
| `^`    | Hat (the goal)  |
| `O`    | Hole (game over)|
| `░`    | Empty field     |
| `*`    | Player's path   |

## Installation

```bash
git clone <repo-url>
cd find-your-hat
npm install
```

## How to use?

Start the game:

```bash
node main.js
```

Enter a direction each turn:

- `u` — up
- `d` — down
- `l` — left
- `r` — right
- `q` — quit

## Tests

```bash
npm test
```

## License

MIT © Love Holmgren
