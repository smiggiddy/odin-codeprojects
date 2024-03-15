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
        console.log(ship.coordinates);
    });
    expect(duplicates).toBeFalsy();
});
