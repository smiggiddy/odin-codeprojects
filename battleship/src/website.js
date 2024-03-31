import { forEach } from 'lodash';

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
        this.header.textContent = 'Battleship';
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
                    console.log('miss ');
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

        playerOneDiv.appendChild(this.drawGrid(this.game.player1));

        const playerTwoDiv = document.createElement('div');
        playerTwoDiv.classList.add('player2');
        playerTwoDiv.addEventListener('click', (event) =>
            this.handleAttackClick(event),
        );
        playerTwoDiv.appendChild(this.drawGrid(this.game.player2));

        this.container.append(playerOneDiv, playerTwoDiv);
    }

    handleAttackClick(event) {
        let move = JSON.parse(event.target.dataset.cell);

        // Exit if the block has already been clicked
        let available = this.game.player2.gameboard.scoreboard;
        if (
            available.misses.has(JSON.stringify(move)) ||
            available.hits.has(JSON.stringify(move))
        )
            return;

        this.game.handleUserMove(JSON.stringify(move));
        this.updateScreen();
        this.CPUMove();
        console.log(available, move);
    }

    CPUMove() {
        this.game.handleCPUMove();
        this.updateScreen();
    }
}
