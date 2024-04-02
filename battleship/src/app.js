export default class Game {
    constructor(players) {
        this.player1 = players.player1;
        this.player2 = players.player2;
        // this.main();
    }

    main() {
        // TODO take turns picking points to shoot a ship
        let count = 0;

        // Main Game Loop
        while (count < 100) {
            this.handleUserMove();
            this.handleCPUMove();

            // console.log(
            //     this.player1.gameboard.scoreboard,
            //     this.player1.gameboard.sunkShipCount,
            //     this.player2.gameboard.scoreboard,
            // );
            if (this.player1.gameboard.sunkShipCount === 5) return;

            count += 1;
        }
    }

    handleUserMove(move = null) {
        // let move = window.prompt('Enter your move in array fashion');
        if (move) {
            this.player2.gameboard.receiveAttack(JSON.parse(move));
        }
        this.player2.gameboard.shipStatus();
    }

    handleCPUMove() {
        let move = this.player2.computerMoves(
            this.player1.gameboard.scoreboard,
        );
        this.player1.gameboard.receiveAttack(move);
        this.player1.gameboard.shipStatus();
    }
}
