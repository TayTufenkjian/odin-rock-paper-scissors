function computerPlay() {
    // List the possible options
    options = ['rock', 'paper', 'scissors']

    // Get a random integer between 0 and 3 to use when selecting an option from the list
    randomIndex = Math.floor(Math.random() * 3); 

    // Return the option at that random index in the list
    return options[randomIndex];
}


function playRound(playerSelection, computerSelection) {

    // Convert player selection to all lowercase letters for the purposes of comparison
    playerSelection = playerSelection.toLowerCase();

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

function game() {
    // Initialize variables to keep score
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds of the game  
    for (i = 0; i < 5; i++) {

        // Get the player selection
        let playerSelection = prompt(`Round ${i + 1} - enter rock, paper, or scissors:`);

        // Get the computer selection
        let computerSelection = computerPlay();

        // Play a round
        let result = playRound(playerSelection, computerSelection);

        // Log the result of the round
        console.log(`Round ${i + 1}: ${result}`);

        // Keep score
        if (result.includes('win')) {
            playerScore += 1;
        } 
        if (result.includes('lose')) {
            computerScore += 1;
        }

        // Log the updated score
        console.log(`The score is now: \n Player: ${playerScore} \n Computer: ${computerScore}`);
    }

    // Log the winner at the end of all 5 rounds
    if (playerScore > computerScore) {
        console.log('You won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game!');
    } else {
        console.log('You tied, after all 5 rounds!');
    }
}

game();