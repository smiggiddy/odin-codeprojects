export default class Game {
    constructor(players) {
        this.player1 = players.player1;
        this.palyer2 = players.player2;
        this.main();
    }

    main() {
        // TODO take turns picking points to shoot a ship
        this.player1.gameboard.receiveAttack([1, 2]);
        this.player1.gameboard.receiveAttack([3, 8]);
        console.log(this.player1.gameboard);
    }
}
