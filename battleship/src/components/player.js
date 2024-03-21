import { Gameboard } from './gameboard';
class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.playerName = name;
    }

    computerMoves(scoreboard) {
        function coordinates() {
            let x = Math.floor(Math.random() * 10) + 1;
            let y = Math.floor(Math.random() * 10) + 1;
            return [x, y];
        }

        while (true) {
            let potentialMove = coordinates();
            console.log(
                scoreboard.misses.has(JSON.stringify(potentialMove)),
                potentialMove,
            );
            if (!scoreboard.misses.has(JSON.stringify(potentialMove))) {
                return potentialMove;
            }
        }
    }
}

export { Player };
