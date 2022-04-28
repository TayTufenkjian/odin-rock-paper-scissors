function computerPlay() {
    // List the possible options
    options = ['rock', 'paper', 'scissors']

    // Get a random integer between 0 and 3 to use when selecting an option from the list
    randomIndex = Math.floor(Math.random() * 3); 

    // Return the option at that random index in the list
    return options[randomIndex];
}


function playerPlay() {
    // List the possible options
    options = ['rock', 'paper', 'scissors']

    // Prompt the player until they enter a valid selection
    do {
        playerSelection = prompt('Enter rock, paper, or scissors:');
    } while (!playerSelection || !options.includes(playerSelection.toLowerCase()))

    // Return the selection
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {

    // Convert player selection to all lowercase letters for the purposes of comparison
    playerSelection = playerSelection.toLowerCase();

    // For testing
    console.log(`Player entered: ${playerSelection}`);
    console.log(`Computer entered: ${computerSelection}`);

    // Initialize winner and results variables
    let isWinner;

    // Create error message in case something goes wrong
    let error_message = 'Something went wrong. Please try again.';

    // Check for a tie
    if (playerSelection === computerSelection) {
        return 'tie';
    } else { 
        // If there's no tie, compare player and computer selections 
        switch (playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'scissors':
                        isWinner = true;
                        break;
                    case 'paper':
                        isWinner = false;
                        break;
                    default:
                        return error_message;
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        isWinner = true;
                        break;
                    case 'scissors':
                        isWinner = false;
                        break;
                    default:
                        return error_message;
                }
                break;
            case 'scissors':
                switch(computerSelection) {
                    case 'paper':
                        isWinner = true;
                        break;
                    case 'rock':
                        isWinner = false;
                        break;
                    default:
                        return error_message;
                }
        }

        if (isWinner) {
            return 'win';
        } else {
            return 'lose';
        }
    }
}


function game() {
    // Initialize variables to keep score
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds of the game  
    for (i = 0; i < 5; i++) {

        // Get the player selection
        let playerSelection = playerPlay();

        // Get the computer selection
        let computerSelection = computerPlay();

        // Play a round
        let result = playRound(playerSelection, computerSelection);

        // Format selections to display in message
        playerSelection = playerSelection.toLowerCase();
        let playerSelectionFormatted = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
        let computerSelectionFormatted = computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase());
        let message;

        // Keep score
        switch(result) {
            case 'win':
                playerScore += 1;
                message = `You win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}.`;
                break;
            case 'lose':
                computerScore += 1;
                message = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}.`;
                break;
            case 'tie':
                console.log('This round is a tie!');
                message = `Tie! You and the computer both chose ${computerSelectionFormatted}.`
                break;
            default:
                message = 'Woops. Something went wrong.';
        }

        // Log the result of the round
        console.log(`Round ${i + 1}: ${message}`);

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