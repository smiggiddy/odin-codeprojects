const game = (function() {
    const gameBoard = new Array(['', '', ''], ['', '', ''], ['', '', '']);
    
    const resetGameBoard = () => {
        gameBoard.forEach(item => {
            item[0] = '';
            item[1] = '';
            item[2] = '';
        })
    }


    const playGame = function(){
        for (i=0; i<9; i++) {
            let newNum = prompt("enter a number")
            printGameBoard();
        };
    };

    const printGameBoard = () => console.log(gameBoard[0] + "\n" + gameBoard[1] + "\n" + gameBoard[2]);


    const evalGameOutcome = gameBoard => {
        // Checks if elements are equal 
        let isWinner = arr =>  arr.reduce(function(a,b) { return a === b ? a : false; });

        // create new array of vertical game board
        let vertArray;
        gameBoard.forEach((_, index) => vertArray.push(vert.map(e => e[index])));

        // check for winner in landscape cases
        const winnerTestHorizontal = checkgameBoard.forEach(element => {
           isWinner(element);
        });
        
    }

    return { playGame, printGameBoard };
})();

game.playGame();
