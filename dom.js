let playerScore = 0;
let computerScore = 0;

//Create a selection for each button//

const pickRock = document.querySelectorAll('#btn')[0];
pickRock.addEventListener('click', (playRound("rock", computerPlay)));

const pickPaper = document.querySelectorAll('#btn')[1];
pickPaper.addEventListener('click', (playRound("paper", computerPlay)));

const pickScissors = document.querySelectorAll('#btn')[2];
pickScissors.addEventListener('click', (playRound("scissors", computerPlay)));

// Random selection for computer//
function random(a) {
    return Math.floor(Math.random() * (a + 1));
}

function computerPlay() {
    let picked = random(2);
    return (picked === 0) ? "rock" : (picked === 1) ? "paper" : "scissors";
}


//Tells various outcomes of rock paper scissors match and plays single round.//
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "You lose! Paper covers rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "You win! Rock crushes scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "You lose! Scissors cuts paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win! Paper covers rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "You lose! Rock crushes scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "You win! Scissors cuts paper!";
    }
}