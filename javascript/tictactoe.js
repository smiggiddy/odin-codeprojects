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

let rpc = ["rock", "paper", "scissors"]

let usersChoice = () => {
    let userChoice = prompt("Rock, Paper, or Scissors? ");
    return userChoice.toLocaleLowerCase();
}

let getCPUChoice = () => {
    // Generate a random number between 0 and 2
    let choice = Math.floor(Math.random() * 3);

    return rpc[choice];
}

function getResults(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        return "tie";
    } else if (playerSelection == "rock" && cpuSelection == "scissors" ||
                playerSelection == "paper" && cpuSelection == "rock" || 
                playerSelection == "scissors" && cpuSelection == "paper") {
        return `You Win! ${playerSelection} beats ${cpuSelection}`;
    } else {
        return `You Lose! ${cpuSelection} beats ${playerSelection}`;
    }
}

uc = usersChoice();
cpc = getCPUChoice();
console.log(uc, cpc);
console.log(getResults(uc, cpc));