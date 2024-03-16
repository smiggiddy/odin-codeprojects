import { Player } from './components/player';
import Game from './app';

const player1 = new Player('Player 1');
const player2 = new Player('CPU');
const game = new Game({ player1: player1, player2: player2 });
