const tictactoeBoard = (function() {

    let gameBoard = new Array(["", "", ""], ["", "", ""], ["", "", ""]);

    const getGameBoard = () => gameBoard;
    const printGameBoard = () => console.log(gameBoard[0] + "\n" + gameBoard[1] + "\n" + gameBoard[2]);
    
    const resetGameBoard = () => {
        gameBoard.forEach(item => {
            item[0] = '';
            item[1] = '';
            item[2] = '';
        })
    }

    const posititionAvailable = (position) => {
        switch (position) {
            case 1:
                return isEmpty(gameBoard[0][0]);
            case 2:
                return isEmpty(gameBoard[0][1]);
            case 3:
                return isEmpty(gameBoard[0][2]);
            case 4:
                return isEmpty(gameBoard[1][0]);
            case 5:
                return isEmpty(gameBoard[1][1]);
            case 6:
                return isEmpty(gameBoard[1][2]);
            case 7:
                return isEmpty(gameBoard[2][0]);
            case 8:
                return isEmpty(gameBoard[2][1]);
            case 9:
                return isEmpty(gameBoard[2][2]); 
            default:
                console.log('Must enter a number 1 - 9');
                break;
        }
    }

    const isEmpty = position => position === "";

    const placeOnBoard = (position, marker) => {
        // places marker on the gameboard
        marker = marker.getValue(); // get value from object 

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
                console.log('Must enter a number 1 - 9');
                break;
        }
    }

    return { 
        resetGameBoard,
        printGameBoard,
        getGameBoard,
        placeOnBoard,
        posititionAvailable
    };
})();
    

const playerInfo = (function(){
    class Player {
        constructor(name, piece) {
            this.piece = piece;
            this.name = name;
        }
    }

    const player = (name, piece) => {
        return new Player(name, piece);
    };

    return { player}
})();


function block() {
    value = "-";
    const addToken = player => {
        // player is a player info object
        value = player.piece;
    };

    const getValue = () => value;
    
    return {
        addToken,
        getValue
    };
};





const gameController = (() => {
    // Controls the overall flow of the game
    let players = [
        playerInfo.player('Player 1', 'X'),
        playerInfo.player('Player 2', 'O')
    ]

    let xTurn = true; // True = X's turn, False = O's turn
    let round = 0; // 9 Total Rounds for Tic Tac Toe
    

    const switchPlayerTurn = () => {
        xTurn = !xTurn;
    }
    
    const playRound = position => {
        let marker = new block()
        let positionOpen = tictactoeBoard.posititionAvailable(position);
        if (round < 10 && positionOpen) {
            let player = xTurn ? players[0] : players[1];
            marker.addToken(player);
            tictactoeBoard.placeOnBoard(position, marker ); // position on board 
            tictactoeBoard.printGameBoard();
            switchPlayerTurn();
        } else {
            return
        }
        round += 1;
    }

    const evalGameOutcome = gameBoard => {
        // create a new array of the vertical indexes in the game board
        let vertArray = [];
        gameBoard.forEach((_, index) => vertArray.push(gameBoard.map(e => e[index])));

        // create an array of diagnal pieces
        let diagArray = [
            [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]],
            [gameBoard[0,2], gameBoard[1][1], gameBoard[2][0]]
        ];
        
        let checkGameBoard = [gameBoard, diagArray, vertArray];
        for (i=0; i<3; i++) {
            let outcome = _evalGameOutcome(checkGameBoard[i]);
            if (outcome) return outcome[0];
        };
        return false;
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

    return { playRound }
})();

gameController.playRound(2);
gameController.playRound(4);
gameController.playRound(4);
gameController.playRound(5);

// tictactoeBoard.placeOnBoard(1, block)
// tictactoeBoard.printGameBoard();


// const inputController = (function(){
//     // only needed for CLI game
//     const readline = require("readline");
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     const askQuestion = () => { 
//             return new Promise( resolve => {
//             rl.question('Where would you like the piece placed?', position => {
//             position = Number(position);
//             resolve(position);
//             });
//         });
//     };
//
//     const handleAskQuestion = (position, piece) => {
//             placeOnBoard(position, piece);
//             printGameBoard();
//     }
//
//     return {
//         askQuestion
//     }
// })();

// tictactoeBoard.playGame();

    // const playGame = async function(){
    //     for(let i = 0; i<9; i++) {
    //         const move = await askQuestion();
    //         if (i % 2 === 0) {
    //             handleAskQuestion(move, 'x');
    //         } else {
    //             handleAskQuestion(move, 'o');
    //         }
    //
    //         if (i > 3) {
    //             let results = evalGameOutcome(gameBoard);
    //             console.log(results + ' game over');
    //             if (results) return
    //
    //         }
    //         
    //     }
    //     rl.close();
    //     };
    //
//
//
    // const evalGameOutcome = gameBoard => {
    //     // create a new array of the vertical indexes in the game board
    //     let vertArray = [];
    //     gameBoard.forEach((_, index) => vertArray.push(gameBoard.map(e => e[index])));
    //
    //     // create an array of diagnal pieces
    //     let diagArray = [
    //         [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]],
    //         [gameBoard[0,2], gameBoard[1][1], gameBoard[2][0]]
    //     ];
    //     
    //     let checkGameBoard = [gameBoard, diagArray, vertArray];
    //     for (i=0; i<3; i++) {
    //         let outcome = _evalGameOutcome(checkGameBoard[i]);
    //         if (outcome) return outcome[0];
    //     };
    //     return false;
    // };
    //
    // const _evalGameOutcome = arr => {
    //     // Checks if array values are equal to determine winner
    //     let isWinner = checkArr => checkArr.reduce(function(a,b) { return a === b ? a : false; });
    //
    //     const outcome = arr.find(element => {
    //         let result = isWinner(element);
    //         if (result != false) {
    //             return result;
    //         } else {
    //             return false;
    //         }
    //     });
    //     return outcome;
    // };
