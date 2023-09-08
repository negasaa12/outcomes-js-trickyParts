function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let numberOfGuesses = 0;
    let hasWon = false;
  
    return function guess(number) {
      if (hasWon) {
        return "The game is over, you already won!";
      }
      
      numberOfGuesses++;
      
      if (number < secretNumber) {
        return `${number} is too low!`;
      } else if (number > secretNumber) {
        return `${number} is too high!`;
      } else {
        hasWon = true;
        return `You win! You found ${secretNumber} in ${numberOfGuesses} guesses.`;
      }
    };
  }

module.exports = { guessingGame };
