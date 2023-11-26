const game = (function() {
    let gameBoard = new Array(['', '', ''], ['', '', ''], ['', '', '']);
    
    const resetGameBoard = () => {
        gameBoard.forEach(item => {
            item[0] = '';
            item[1] = '';
            item[2] = '';
        })
    }

    const playGame = function(){
        placeOnBoard(2, 'x');
        printGameBoard();
        // for (i=0; i<9; i++) {
        //     printGameBoard();
        // };
        // evalGameOutcome(gameBoard);
    };

    const placeOnBoard = (position, marker) => {
        // places marker on the gameboard
        switch (position) {
            case 1:
                gameBoard[0][0] = marker;
                break;
            case 2:
                gameBoard[0][1] = marker;
                break;
            case 3:
                gameBoard[0][2] = marker;
                break;
            case 4:
                gameBoard[1][0] = marker;
                break;
            case 5:
                gameBoard[1][1] = marker;
                break;
            case 6:
                gameBoard[1][2] = marker;
                break;
            case 7:
                gameBoard[2][0] = marker;
                break;
            case 8:
                gameBoard[2][1] = marker;
                break;
            case 9:
                gameBoard[2][2] = marker;
                break;
            default:
                break;
        }
    }

    const printGameBoard = () => console.log(gameBoard[0] + "\n" + gameBoard[1] + "\n" + gameBoard[2]);

    const evalGameOutcome = gameBoard => {

        // create a new array of the vertical indexes in the game board
        let vertArray = [];
        gameBoard.forEach((_, index) => vertArray.push(gameBoard.map(e => e[index])));

        // create an array of diagnal pieces
        let diagArray = [
            [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]],
            [gameBoard[0,2], gameBoard[1][1], gameBoard[2][0]]
        ]
        
        let checkGameBoard = [gameBoard, diagArray, vertArray];
        for (i=0; i<3; i++) {
            let outcome = _evalGameOutcome(checkGameBoard[i]);
            if (outcome) console.log(outcome[0]);
        }
    };

    const _evalGameOutcome = arr => {
        // Checks if array values are equal to determine winner
        let isWinner = checkArr => checkArr.reduce(function(a,b) { return a === b ? a : false; });

        const outcome = arr.find(element => {
            let result = isWinner(element);
            if (result != false) {
                return result;
            } else {
                return false;
            }
        });
        return outcome;
    };

    return { playGame, printGameBoard };
})();

game.playGame();


    // let gameBoard = [
    //     ['x', '', 'o'],
    //     ['', '', 'o'],
    //     ['x', 'o', 'o']
    // ]
