import { Gameboard } from '../src/components/gameboard';
class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.playerName = name;
    }
}

let p = new Player('Player1');

it('should contain a gameboard', () => {
    expect(p.gameboard).toHaveProperty(
        'ships',
        'scoreboard',
        'shipCount',
        'sunkShipCount',
    );
});
