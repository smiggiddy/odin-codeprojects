import { Gameboard } from './gameboard';
class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.playerName = name;
    }
}

export { Player };
