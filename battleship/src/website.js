export default class Website {
    constructor(game) {
        this.game = game;
        this.container = document.createElement('div');
        this.container.classList.add('container');

        this.header = document.createElement('section');
        this.header.id = 'header';

        this.footer = document.createElement('footer');
        this.footer.id = 'footer';

        this.drawGrid(this.game.player1);

        document.body.appendChild(this.container);
    }

    drawGrid(player = null) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        if (player) {
            div.classList.add(`grid-${player.playerName}`);
        } else {
            div.classList.add('grid');
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.cell = `${j + 1},${i + 1}`;
                cell.style.border = '1px solid black';
                div.appendChild(cell);
            }
        }
        this.container.appendChild(div);
    }
}
