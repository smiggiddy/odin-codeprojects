export default class Website {
    constructor(game) {
        this.game = game;
        this.container = document.createElement('div');
        this.container.classList.add('container');

        this.header = document.createElement('header');
        this.header.id = 'header';

        this.footer = document.createElement('footer');
        this.footer.id = 'footer';

        this.createHeader();
        this.updateScreen();
        document.body.append(this.header, this.container, this.footer);
    }

    createHeader() {
        let title = document.createElement('h1');
        title.textContent = 'Battleship';

        this.header.appendChild(title);
    }

    drawGrid(player = null) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        div.classList.add('grid');

        let misses = player.gameboard.scoreboard.misses;
        let hits = player.gameboard.scoreboard.hits;
        let shipCoordinates = player.gameboard.ships.map(
            (ship) => ship.coordinates,
        );
        let allShipCoordinates = shipCoordinates.concat(...shipCoordinates);

        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.cell = `[${j}, ${i}]`;
                cell.style.border = '1px solid black';
                div.appendChild(cell);

                if (player.playerName === 'Player1') {
                    allShipCoordinates.forEach((ship) => {
                        if (JSON.stringify([j, i]) === JSON.stringify(ship)) {
                            cell.style.backgroundColor = 'blue';
                        }
                    });
                }

                if (hits.has(JSON.stringify([j, i]))) {
                    cell.style.backgroundColor = 'red';
                } else if (misses.has(JSON.stringify([j, i]))) {
                    cell.style.backgroundColor = 'black';
                }
            }
        }

        return div;
    }

    updateScreen() {
        // Clear screen before update
        this.container.innerHTML = '';

        const playerOneDiv = document.createElement('div');
        playerOneDiv.classList.add('player1');

        const h2 = document.createElement('h2');
        h2.classList.add('player-title');
        h2.textContent = 'Player 1';

        playerOneDiv.append(h2, this.drawGrid(this.game.player1));

        const playerTwoDiv = document.createElement('div');
        playerTwoDiv.classList.add('player2');
        playerTwoDiv.addEventListener('click', (event) =>
            this.handleAttackClick(event),
        );

        const h2Cpu = document.createElement('h2');
        h2Cpu.classList.add('player-title');
        h2Cpu.textContent = 'CPU';

        playerTwoDiv.append(h2Cpu, this.drawGrid(this.game.player2));

        this.container.append(playerOneDiv, playerTwoDiv);
    }

    handleAttackClick(event) {
        let move = event.target.dataset.cell
            ? JSON.parse(event.target.dataset.cell)
            : null;
        // Exit if the block has already been clicked
        let available = this.game.player2.gameboard.scoreboard;
        if (
            available.misses.has(JSON.stringify(move)) ||
            available.hits.has(JSON.stringify(move)) ||
            !move
        )
            return;

        this.game.handleUserMove(JSON.stringify(move));
        this.updateScreen();
        if (this.isGameOver()) {
            let winner = this.announceWinner();
            this.container.textContent = `Gameover ${winner} has won the game`;
        }
        this.CPUMove();
    }

    CPUMove() {
        this.game.handleCPUMove();
        this.updateScreen();

        if (this.isGameOver()) {
            let winner = this.announceWinner();
            this.container.textContent = `Gameover ${winner} has won the game`;
        }
    }

    isGameOver() {
        return (
            this.game.player1.gameboard.ships.length === 0 ||
            this.game.player2.gameboard.ships.length === 0
        );
    }

    announceWinner() {
        if (this.game.player1.gameboard.ships.length === 0) {
            return 'CPU';
        }

        return 'Player 1';
    }
}
