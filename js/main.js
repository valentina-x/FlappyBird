import Game from './classes/Game.js';

const game = new Game();
canvas.addEventListener('click', game.startGame);
game.loop();