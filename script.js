function computerPlay() {
    // List the possible options
    options = ['rock', 'paper', 'scissors']

    // Get a random integer between 0 and 3 to use when selecting an option from the list
    randomIndex = Math.floor(Math.random() * 3); 

    // Return the option at that random index in the list
    return options[randomIndex];
}


function playRound(playerSelection, computerSelection) {

    // Initialize winner and results variables
    let isWinner;
    let result;

    // Create error message in case something goes wrong
    let game_error = 'Something went wrong. Please try again.';

    // Check for a tie
    if (playerSelection === computerSelection) {
        return 'You tied! Play again.';
    } else { 
        // If there's no tie, compare player and computer selections 
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                isWinner = true;
            } else if (computerSelection === 'paper') {
                isWinner = false;
            } else {
                return game_error;
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                isWinner = true;
            } else if (computerSelection === 'rock') {
                isWinner = false;
            } else {
                return game_error;
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                isWinner = true;
            } else if (computerSelection === 'scissors') {
                isWinner = false;
            } else {
                return game_error;
            }
        } else {
            return game_error;
        }

        // Return the winner/loser result
        playerSelectionFormatted = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
        computerSelectionFormatted = computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase());

        if (isWinner) {
            result = `You win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}.`;
        } else {
            result = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}.`;
        }
        return result;
    }
}

let playerSelection ="scissors";
let computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));