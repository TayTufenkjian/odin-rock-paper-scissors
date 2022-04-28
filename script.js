function computerPlay() {
    // List the possible options
    options = ['rock', 'paper', 'scissors']

    // Get a random integer between 0 and 3 to use when selecting an option from the list
    randomIndex = Math.floor(Math.random() * 3); 

    // Return the option at that random index in the list
    return options[randomIndex];
}

console.log(computerPlay());