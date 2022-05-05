// Initialize global variables
const options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;  
let round = 0;

// Listen for page load
document.addEventListener('DOMContentLoaded', () => {   
    // Listen for a click on the buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // When a button is clicked, play a round
        button.addEventListener('click', () => playRound(button.id, computerPlay()));
    })
});


function computerPlay() {
    // Get a random integer between 0 and 3 to use when selecting an option from the list
    let randomIndex = Math.floor(Math.random() * 3); 

    // Return the option at that random index in the list
    return options[randomIndex];
}


function playRound(playerSelection, computerSelection) {

    // Initialize winner variable
    let winner;

    // Get divs for showing scores, round result, and game result
    const divPlayerScore = document.querySelector('#player .score');
    const divComputerScore = document.querySelector('#computer .score');
    const roundNumber = document.querySelector('#round');
    const playerEntered = document.querySelector('#player-entered');
    const computerEntered = document.querySelector('#computer-entered');
    const roundResult = document.querySelector('#result');
    const gameResult = document.querySelector('#game-result');

    // Show the round number
    round += 1;
    roundNumber.textContent = `Round: ${round}`;

    // Show the player and computer selections
    playerEntered.textContent = `Player entered: ${playerSelection}`;
    computerEntered.textContent = `Computer entered: ${computerSelection}`;

    // Check for a tie
    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!';
    } else { 
        // If there's no tie, compare player and computer selections 
        switch (playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'scissors':
                        winner = true;
                        break;
                    case 'paper':
                        winner = false;
                        break;
                    default:
                        break;
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        winner = true;
                        break;
                    case 'scissors':
                        winner = false;
                        break;
                    default:
                        break;
                }
                break;
            case 'scissors':
                switch(computerSelection) {
                    case 'paper':
                        winner = true;
                        break;
                    case 'rock':
                        winner = false;
                        break;
                    default:
                        break;
                }
        }

        // Keep score and show the result of the round
        try {
            if (winner) {
                playerScore += 1;
                divPlayerScore.textContent = playerScore;
                roundResult.textContent = 'You won this round!';
            } else {
                computerScore += 1;
                divComputerScore.textContent = computerScore;
                roundResult.textContent = 'You lost this round!';
            }
        } catch(error) {
            roundResult.textContent = 'Woops. Something went wrong. Please try again.';
        }
    }

    // Announce winner when either player or computer reaches a score of 5
    if (playerScore === 5) {
        gameResult.textContent = 'You won the game!';
    } 
    if (computerScore === 5) {
        gameResult.textContent = 'You lost the game!';
    } 
}
   