// TODO 
/*
Simple TTT game. 

User chooses R,P,S and then the computers answer should be randomly generated 
from those 3 options

method to compare users answer vs computers
rock > scissors && rock < paper
scissors > paper && scissors < rock
pape > rock && paper < scissors
repeat if user_ans == computer_ans


if either player wins log output
else if its a tie , it should prompt the user to pick a new answer
until a winner is picked
*/

// index 0 = wins, index 1 = loss
// index 2 = ties
let CPUScore = [0,0,0];
let userScore = [0,0,0];

let playRound = (choice) => {
    let uc = choice.target.dataset.item; 
    cpc = getCPUChoice();
    getResults(uc, cpc);
}

let getCPUChoice = () => {
    let rpc = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return rpc[choice];
}

function getResults(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        updateScore('tie')
        return "tie";
    } else if (playerSelection == "rock" && cpuSelection == "scissors" ||
                playerSelection == "paper" && cpuSelection == "rock" || 
                playerSelection == "scissors" && cpuSelection == "paper") {
        updateScore('user');
        return `You Win! ${playerSelection} beats ${cpuSelection}`;
    } else {
        updateScore('cpu');
        return `You Lose! ${cpuSelection} beats ${playerSelection}`;
    }
}

function updateScore(winner) {
   if (winner === 'user') {
        userScore[0] += 1;
        CPUScore[1] += 1;
    } else if (winner === 'cpu') {
        CPUScore[0] += 1;
        userScore[1] += 1;
    } else {
        CPUScore[2] += 1;
        userScore[2] += 1;
    } 

    // Need a better way to target multiple elements, but this works for now
    let userScoreDiv = document.querySelector('.user-row');
    let cpuScoreDiv = document.querySelector('.cpu-row');
    userScoreDiv.querySelector('.user-win').textContent = userScore[0];
    userScoreDiv.querySelector('.user-loss').textContent = userScore[1];
    userScoreDiv.lastElementChild.textContent = userScore[2];
    cpuScoreDiv.querySelector('.cpu-win').textContent = CPUScore[0];
    cpuScoreDiv.querySelector('.cpu-loss').textContent = CPUScore[1];
    cpuScoreDiv.lastElementChild.textContent = CPUScore[2];

    if (userScore[0] === 5 || CPUScore === 5) {
        let showWinner = document.querySelector('.score .title-text');
        if(userScore[0] === 5){
        showWinner.textContent = `YOU WON!`;
        } else if(CPUScore[0] === 5) {
        showWinner.textContent = `YOU LOST!`;
        }
        console.log('Game Over');
    }
    // userScoreDiv.textContent = userScore; //`Your Score: ${userScore} | CPU Score: ${CPUScore}`;
    // console.log(userScore, CPUScore);
}

let choice = document.querySelectorAll('button');
choice.forEach( (c) => c.addEventListener('click', playRound));