import { Gameboard } from '../src/components/gameboard';

const gb = new Gameboard();
it('should place ships at random coordinates', () => {
    // wait
});

it('should return random coordinates', () => {
    const size = 3;
    const coordinates = gb.generateCoordinates(size);

    for (let i = 0; i < coordinates.length; i++) {
        expect(coordinates[i][0]).toBeLessThan(11);
        expect(coordinates[i][1]).toBeLessThan(11);
        expect(coordinates[i][0]).toBeGreaterThan(0);
        expect(coordinates[i][1]).toBeGreaterThan(0);
    }
    // expect(coordinates).toBe(3);
    expect(coordinates).toHaveLength(size);
});

it('should create 5 ships', () => {
    expect(gb.ships).toHaveLength(5);
});

it('should create 5 ships with lengths of 2,3,3,4,5', () => {
    const size = [2, 3, 3, 4, 5];
    for (let i = 0; i < 5; i++) {
        expect(gb.ships[i].length).toBe(size[i]);
    }
});

it('should contain unique random coordinates for each ship', () => {
    let ships = [];
    let count = 0;
    let duplicates = false;

    gb.ships.forEach((ship) => {
        for (let i = 0; i < ship.coordinates.length; i++) {
            let test = ships.find(
                (s) =>
                    JSON.stringify(s) === JSON.stringify(ship.coordinates[i]),
            );
            if (!test) ships.push(ship.coordinates[i]);
            if (test) {
                duplicates = true;
            }
        }
    });
    expect(duplicates).toBeFalsy();
});

it('should show a ship was hit and increase the hit count', () => {
    let attacks = [8, 5];
    gb.ships[0].coordinates = [[8, 5]];
    gb.receiveAttack(attacks);
    expect(gb.ships[0].hits).toBe(1);
});

it('should report if a ship is sunk', () => {
    gb.ships[0].length = 1;
    expect(gb.ships[0].isSunk()).toBeTruthy();
});

it('should track hits and misses', () => {
    expect(gb.scoreboard.hits.size).toBe(1);
    expect(gb.scoreboard.misses.size).toBe(0);

    gb.receiveAttack([-1, -1]);
    expect(gb.scoreboard.misses.size).toBe(1);
});

it('should have a sunk count of 1 and only four ships now', () => {
    gb.shipStatus();
    expect(gb.ships).toHaveLength(4);
    expect(gb.sunkShipCount).toBe(1);
});
