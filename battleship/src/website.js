export default class Website {
    constructor(game) {
        this.game = game;
        this.container = document.createElement('div');
        this.container.classList.add('container');

        this.header = document.createElement('section');
        this.header.id = 'header';

        this.footer = document.createElement('footer');
        this.footer.id = 'footer';

        this.updateScreen();
        document.body.appendChild(this.container);
    }

    drawGrid(player = null) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        div.classList.add('grid');

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.cell = `[${j + 1}, ${i + 1}]`;
                cell.style.border = '1px solid black';
                div.appendChild(cell);
            }
        }
        return div;
    }

    updateScreen() {
        const playerOneDiv = document.createElement('div');
        playerOneDiv.classList.add('player1');
        playerOneDiv.appendChild(this.drawGrid(this.game.player1));
        playerOneDiv.addEventListener('click', (event) =>
            this.handleAttackClick(event),
        );

        const playerTwoDiv = document.createElement('div');
        playerTwoDiv.classList.add('player2');
        playerTwoDiv.appendChild(this.drawGrid(this.game.player2));

        this.container.append(playerOneDiv, playerTwoDiv);
    }

    handleAttackClick(event) {
        let move = JSON.parse(event.target.dataset.cell);
        // let [x, _, y] = event.target.dataset.cell;
        // let move = [Number(x), Number(y)];
        console.log(move);
        this.game.handleUserMove(JSON.stringify(move));
        console.log(this.game.player2.gameboard.scoreboard);
        console.log(this.game.player2.gameboard.ships);
    }
}
