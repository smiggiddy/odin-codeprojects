export default class Game {
    constructor(players) {
        this.player1 = players.player1;
        this.player2 = players.player2;
        this.main();
    }

    main() {
        // TODO take turns picking points to shoot a ship
        // this.player1.gameboard.receiveAttack([1, 2]);
        // this.player1.gameboard.receiveAttack([3, 8]);
        let count = 0;
        while (count < 100) {
            let move = this.player2.computerMoves(
                this.player1.gameboard.scoreboard,
            );
            this.player1.gameboard.receiveAttack(move);
            this.player1.gameboard.shipStatus();

            console.log(
                this.player1.gameboard.scoreboard,
                move,
                this.player1.gameboard.sunkShipCount,
            );
            if (this.player1.gameboard.sunkShipCount === 5) return;

            count += 1;
        }
    }
}
