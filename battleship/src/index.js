import { Player } from './components/player';
import Game from './app';
import Website from './website';
import './style.css';

const player1 = new Player('Player1');
const player2 = new Player('CPU');
const game = new Game({ player1: player1, player2: player2 });
const website = new Website(game);
