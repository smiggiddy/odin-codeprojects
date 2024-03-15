import { Ship } from './ship';
let _ = require('lodash');

class Gameboard {
    constructor() {
        // some code
        this.ships = [];

        // load settings
        this.settings();

        // Create Ships
        this.createShips();
    }

    settings() {
        this.shipCount = 5;
    }

    createShips() {
        let shipSize = [2, 3, 3, 4, 5];
        for (let i = 0; i < shipSize.length; i++) {
            let ship = new Ship(shipSize[i]);

            while (true) {
                let cords = this.generateCoordinates(shipSize[i]);
                ship.coordinates = cords;

                if (!this.checkForDuplicateCoordinates()) {
                    break;
                }
            }
            this.ships.push(ship);
        }
    }

    generateCoordinates(size) {
        const coordinates = [];
        const direction =
            Math.floor(Math.random() * 2) === 1 ? 'vertical' : 'horizontal';
        // if direction == vertial.. x should be the same.. else y will be the same
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let startingPoint = Math.floor(Math.random() * 9) + 1;

        if (startingPoint > 10 - size) startingPoint -= size;

        for (let i = 1; i < size + 1; i++) {
            if (direction === 'vertical') {
                y = i + startingPoint;
                coordinates.push([x, y]);
            } else {
                x = i + startingPoint;
                coordinates.push([x, y]);
            }
        }

        return coordinates;
    }

    checkForDuplicateCoordinates() {
        // needs to save coordinates to a list
        let ships = [];
        let duplicates = false;

        if (this.ships.length > 0) {
            this.ships.forEach((ship) => {
                for (let i = 0; i < ship.coordinates.length; i++) {
                    let check = ships.find(
                        (s) =>
                            JSON.stringify(s) ===
                            JSON.stringify(ship.coordinates[i]),
                    );
                    if (!check) ships.push(ship.coordinates[i]);
                    if (check) {
                        duplicates = true;
                    }
                }
            });
        }

        return duplicates;
    }
}

export { Gameboard };
