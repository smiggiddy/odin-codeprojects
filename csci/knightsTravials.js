class Node {
    constructor() {
        this.distance = null;
        this.predecessor = null;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(thing) {
        this.queue.push(thing);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class Graph {
    constructor(columns, rows) {
        this.adjMatrix = [];
        this.rows = rows;
        this.columns = columns;

        // Build the adj list
        this.buildAdjList();
    }
    buildAdjList() {
        this.adjList = [];

        // Possible knight moves relative to its current position
        const moves = [
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2],
            [1, -2],
            [2, -1],
            [2, 1],
            [1, 2],
        ];

        for (let y = 0; y < this.rows; y++) {
            let rowData = [];
            for (let x = 0; x < this.columns; x++) {
                let adjPositions = [];

                // Generate adjacent positions for the current square
                for (const [dx, dy] of moves) {
                    const newX = x + dx;
                    const newY = y + dy;

                    // Check if the new position is within the board boundaries
                    if (
                        newX >= 0 &&
                        newX < this.columns &&
                        newY >= 0 &&
                        newY < this.rows
                    ) {
                        adjPositions.push([newX, newY]);
                    }
                }

                rowData.push(adjPositions);
            }
            this.adjList.push(rowData);
        }
    }

    knightMoves(start, finish) {
        this.bfsInfo = [];
        let itemFound = false;
        this.start = start;
        this.finish = finish;

        for (let i = 0; i < this.columns; i++) {
            this.bfsInfo[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.bfsInfo[i][j] = new Node();
            }
        }

        // This is to mark where we're starting the loop
        this.bfsInfo[start[0]][start[1]].distance = 0;

        // instantiate the queue
        let queue = new Queue();
        queue.enqueue(start);

        while (!queue.isEmpty() && !itemFound) {
            let vertex = queue.dequeue();
            if (vertex[0] === finish[0] && vertex[1] === finish[1]) {
                itemFound = true;
                break;
            }

            for (
                let i = 0;
                i < this.adjList[vertex[0]][vertex[1]].length;
                i++
            ) {
                let neighbor = this.adjList[vertex[0]][vertex[1]][i];
                let x = neighbor[0];
                let y = neighbor[1];

                if (this.bfsInfo[x][y].distance === null) {
                    this.bfsInfo[x][y].distance =
                        this.bfsInfo[vertex[0]][vertex[1]].distance + 1;
                    this.bfsInfo[x][y].predecessor = [vertex[0], vertex[1]];
                }

                queue.enqueue(neighbor);
            }
        }
    }

    lookAtBfs() {
        this.path = [this.finish];

        let queue = new Queue();
        let x = this.finish[0];
        let y = this.finish[1];

        queue.enqueue(this.bfsInfo[x][y]);

        while (!queue.isEmpty()) {
            let current = queue.dequeue();

            if (current.predecessor) {
                this.path.unshift(current.predecessor);
                x = current.predecessor[0];
                y = current.predecessor[1];
                let previousNode = this.bfsInfo[x][y];
                queue.enqueue(previousNode);
            }
        }
        return this.path;
    }
}

let g = new Graph(8, 8);
console.log(g.adjList[1][2]);
g.knightMoves([0, 0], [7, 7]);
console.log(g.lookAtBfs());
g.knightMoves([0, 0], [3, 3]);
console.log(g.lookAtBfs());
g.knightMoves([3, 3], [4, 3]);
console.log(g.lookAtBfs());
