const tictactoeBoard = (function() {

    let gameBoard = new Array(["", "", ""], ["", "", ""], ["", "", ""]);

    const getGameBoard = () => gameBoard;
    // const printGameBoard = () => console.log(gameBoard[0] + "\n" + gameBoard[1] + "\n" + gameBoard[2]);

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
                Alert('Must enter a number 1 - 9');
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
                break;
        }
    }

    return {
        resetGameBoard,
        // printGameBoard,
        getGameBoard,
        placeOnBoard,
        posititionAvailable
    };
})();


const playerInfo = (function() {
    class Player {
        constructor(name, piece) {
            this.piece = piece;
            this.name = name;
        }
    }

    const player = (name, piece) => {
        return new Player(name, piece);
    };

    return { player }
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

    let gameOver;
    let xTurn = true; // True = X's turn, False = O's turn
    let round = 0; // 9 Total Rounds for Tic Tac Toe

    const resetGame = () => {
        round = 0;
        xTurn = true;
        gameOver = false;
        tictactoeBoard.resetGameBoard();
    }

    const gameStatus = () => gameOver;
    const gameRound = () => round;

    const switchPlayerTurn = () => {
        xTurn = !xTurn;
    }

    const playRound = position => {
        let marker = new block()
        let positionOpen = tictactoeBoard.posititionAvailable(position);

        if (round < 10 && positionOpen) {

            let player = xTurn ? players[0] : players[1];
            marker.addToken(player);
            tictactoeBoard.placeOnBoard(position, marker); // position on board 

            // Check for Winner
            gameOver = evalGameOutcome(tictactoeBoard.getGameBoard());

            if (gameOver) {
                console.log(`${player.name}: ${player.piece} won!`)
                return
            } 
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
            [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]
        ];

        let checkGameBoard = [gameBoard, vertArray, [diagArray[0]], [diagArray[1]]];
        for (i = 0; i < 4; i++) {
            let outcome = _evalGameOutcome(checkGameBoard[i]);
            if (outcome) {
                return true;
            };
        };
        return false;
    };

    const _evalGameOutcome = arr => {
        // Checks if array values are equal to determine winner
        let isWinner = checkArr => checkArr.reduce(function(a, b) { return a === b ? a : false; });

        const outcome = arr.find(element => {
            let result = isWinner(element);
            if (result != false) {
                return true;
            } else {
                return false;
            }
        });
        return outcome;
    };

    return { playRound, resetGame, gameStatus, gameRound }
})();


const screenController = (() => {
    const contentDiv = document.querySelector('.content')
    const gameDiv = document.querySelector('.game-area');
    const gameStatus = document.querySelector('.game-status')
    const game = tictactoeBoard.getGameBoard();
    const resetButton = document.createElement('button');

    resetButton.classList.add(['btn']);
    resetButton.textContent = 'New Game';
    contentDiv.appendChild(resetButton);

    const updateScreen = () => {
        status()
        displayBoard();
    }

    const status = () => {
        let pTags = gameStatus.querySelectorAll('p');
        if (pTags) pTags.forEach(e => e.remove());

        let message = document.createElement('p');
        let gameOn = gameController.gameStatus() ? "Play again?" : "";
        let round = gameController.gameRound();
        
        if (round <= 9 && gameOn) {
            message.textContent = gameOn;
        } else if (round >= 9 && !gameOn) {
            message.textContent = "Draw, play again?"; 
        }

        gameStatus.appendChild(message);

    }


    const displayBoard = () => {
        // Check if someone won the game

        let count = 0; // This is for the data blocks
        gameDiv.querySelectorAll('.block').forEach(e => e.remove());
        game.forEach((e) => {
            e.forEach((element) => {
            count += 1;
            const block = document.createElement('div');
            block.classList.add('block');
            block.setAttribute('data-block', count);
            block.textContent = element;
            block.addEventListener('click', clickHandlerBoard);
            gameDiv.appendChild(block);
            });
        });
    }



    function clickHandlerBoard(e) {
            const selectedBlock = e.target.dataset.block;
            const empty = e.target.textContent;
            const gameStatus = gameController.gameStatus();

            if (!selectedBlock || empty !== "" || gameStatus) return;

            gameController.playRound(Number(selectedBlock));
            updateScreen();
    };

    function clickResetButton() {
        gameController.resetGame();
        status();
        updateScreen();
    }

    resetButton.addEventListener('click', clickResetButton);


    // Initial Load
    updateScreen();
})();


