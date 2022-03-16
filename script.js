


// Generate random answer from options for computer selection
const options = ["rock", "paper", "scissors"];

function computerPlay() {
    let rand = options[Math.floor(Math.random() * options.length)];
    return rand;
    
}

function playerSelection() {
    let input = window.prompt("Choose Rock, Paper or Scissors");
        input = input.toLowerCase();
        return input
}

// code to play once round
// switch player selction to lowercase
//compare playerSelection to computerSelection and return string to delclare winnner
function playRound() {
    
    let playerSelect = playerSelection();
    let computerSelection = computerPlay();

    

    if (playerSelect === computerSelection) {
        return "You tied"

    } else if (playerSelect == "rock" && computerSelection == "scissors") {
        return "You won! Rock beats Scissors";

    } else if (playerSelect == "rock" && computerSelection == "paper"){ 
        return "You lost! Paper beats rock";

    } else if (playerSelect == "scissors" && computerSelection == "paper") {
        return "You Won! Scissors beats Paper";

    }else if (playerSelect == "scissors" &&  computerSelection == "rock") {
        return "You lost! Rock beat scissors";

    }else if (playerSelect == "paper" && computerSelection == "rock") {
        return "You won! Paper beats Rock";

    }else (playerSelect == "paper" && computerSelection == "scissors") ;{
        return "You Lost! Scissors beats Paper";
    }

}


// Game function plays 5 round and keeps score to report winner or looser at end
// If player wins give point to player else give point to computer
// If player points = computer points return tie game, else if player points greater than
//computer return winner else return looser

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();

    }
    
} 

game();