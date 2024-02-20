import { Ship } from "../src/components/ship";


it('should have length, number of times hit, and if sunk', () => {
    // Small ship
    const _ship = new Ship(2)
    expect(_ship).toEqual({
        length: 2,
        hits: 0,
    })

})

it('if hit, hit count should increase', () => {
    const _ship = new Ship(2);
    _ship.hit();
    expect(_ship.hits).toBe(1);
})

it('is not sunk', () => {
    const _ship = new Ship(2);
    expect(_ship.isSunk()).toBeFalsy()
})

it('is sunk', () => {
    const _ship = new Ship(2);
    _ship.hits = 2;
    expect(_ship.isSunk()).toBeTruthy()
})
