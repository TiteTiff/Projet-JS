// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper, scissors) ?")

function getPlayerChoice(playerInput) {
    let playerChoice = playerInput.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors' || playerChoice === 'bomb') {
        return playerChoice;
    }
    else {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        return null;
    }
}

function getComputerChoice() {
    let computerChoice = Math.round(Math.random() * 3);
    return computerChoice === 0 ? 'rock' : computerChoice === 1 ? 'paper' : 'scissors';
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tied!";
    }
    if (playerChoice === 'bomb') {
        return 'Won';
    }
    if (playerChoice === 'rock') {
        return computerChoice === 'scissors' ? 'Won' : 'Lost';
    }
    else if (playerChoice === 'paper') {
        return computerChoice === 'rock' ? 'Won' : 'Lost';
    }
    else if (playerChoice === 'scissors') {
        return computerChoice === 'paper' ? 'Won' : 'Lost';
    }

}

function playGame() {
    let uChoice = getPlayerChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('Computer: ', computerChoice);
    console.log('Player: ', uChoice);
    console.log(findWinner(uChoice, computerChoice));
}

console.log(playGame());