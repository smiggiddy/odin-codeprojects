import { Ship } from './ship';

class Gameboard {
    constructor() {
        // some code
        this.ships = [];
        this.sunkShipCount = 0;

        // load settings
        this.settings();

        // Create Ships
        this.createShips();

        // Tracks the opponents attempts on the players gameboard
        this.scoreboard = {
            hits: new Set(),
            misses: new Set(),
        };
    }

    settings() {
        this.shipCount = 5;
        this.shipSize = [2, 3, 3, 4, 5];
    }

    createShips() {
        for (let i = 0; i < this.shipSize.length; i++) {
            let ship = new Ship(this.shipSize[i]);

            while (true) {
                let cords = this.generateCoordinates(this.shipSize[i]);
                ship.coordinates = cords;

                if (
                    !this.checkForDuplicateCoordinates(ship) &&
                    !this.checkForAdjacentCoordinates(ship)
                ) {
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

    checkForDuplicateCoordinates(ship) {
        // needs to save coordinates to a list
        let duplicates = false;

        if (this.ships.length > 0) {
            this.ships.forEach((s) => {
                for (let i = 0; i < ship.coordinates.length; i++) {
                    let check = s.coordinates.find(
                        (s) =>
                            JSON.stringify(s) ===
                            JSON.stringify(ship.coordinates[i]),
                    );
                    if (check) {
                        duplicates = true;
                    }
                }
            });
        }
        return duplicates;
    }

    checkForAdjacentCoordinates(ship) {
        // needs to save coordinates to a list
        let adjacent = false;
        let test = [];

        const adj = [
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
        ];

        for (let y = 1; y < 11; y++) {
            let rowData = [];
            for (let x = 1; x < 11; x++) {
                let adjPositions = [];
                for (const [adjX, adjY] of adj) {
                    const tempX = x + adjX;
                    const tempY = y + adjY;

                    if (tempX >= 1 && tempX < 11 && tempY >= 1 && tempY < 11) {
                        adjPositions.push([tempX, tempY]);
                    }
                }
                rowData.push(adjPositions);
            }
            test.push(rowData);
        }

        if (this.ships.length > 0) {
            this.ships.forEach((s) => {
                for (let i = 0; i < ship.coordinates.length; i++) {
                    let x = ship.coordinates[i][1];
                    let y = ship.coordinates[i][0];

                    let adjacentCords = test[x - 1][y - 1];

                    for (let t = 0; t < adjacentCords.length; t++) {
                        let check = s.coordinates.find(
                            (s) =>
                                JSON.stringify(s) ===
                                JSON.stringify(adjacentCords[t]),
                        );
                        if (check) {
                            adjacent = true;
                        }
                    }
                }
            });
        }
        return adjacent;
    }

    receiveAttack(coordinate) {
        let shipIndex;

        for (let i = 0; i < this.ships.length; i++) {
            let attacked = this.ships[i].coordinates.find(
                (c) => JSON.stringify(coordinate) === JSON.stringify(c),
            );

            if (attacked) {
                shipIndex = i;
                this.ships[shipIndex].hit();
                this.scoreboard.hits.add(JSON.stringify(coordinate));
                return;
            }
        }

        if (!shipIndex) this.scoreboard.misses.add(JSON.stringify(coordinate));
    }

    shipStatus() {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk()) {
                this.sunkShipCount += 1;
                this.ships.splice(i, 1);
            }
        }
    }
}

export { Gameboard };
