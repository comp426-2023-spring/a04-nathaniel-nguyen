// Rock Paper Scissors (RPS) and Rock Paper Scissors Lizard Spock (RPSLS) Game

// Exporting the functions rps and rpsls

export { rps, rpsls };

// Function to play Rock Paper Scissors (RPS) game
function rps(shot) {
  // Generating a random number between 0 and 2 (inclusive)
  let computer = Math.floor(Math.random() * 3);
  // Assigning the corresponding move to the computer based on the random number
  computer = computer === 0 ? "rock" : computer === 1 ? "paper" : "scissors";

  // If the player doesn't provide a shot, return the computer's move
  if (shot == undefined) {
    return { player: computer };
  }

  let user = shot.toLowerCase(); // Converting the player's shot to lowercase

  let options = ["rock", "paper", "scissor"];

  // Checking if the user's shot is a valid option
  if (!options.includes(user)) {
    if (user === "lizard" || user === "spock") {
      console.error(`${shot} is out of range.`); // Printing an error message if the shot is out of range
      throw new RangeError(); // Throwing a RangeError
    } else {
      console.error(`${shot} is not a valid choice.`); // Printing an error message if the shot is not a valid choice
      throw new RangeError(); // Throwing a RangeError
    }
  }

  let result = "";

  // Determining the result based on the moves of the player and the computer
  if (computer === user) {
    result = "tie";
  } else if (
    (computer === "rock" && user === "scissors") ||
    (computer === "paper" && user === "rock") ||
    (computer === "scissors" && user === "paper")
  ) {
    result = "lose";
  } else {
    result = "win";
  }

  // Returning an object with the player's move, opponent's move, and the result
  return { player: user, opponent: computer, result: result };
}

// Function to play Rock Paper Scissors Lizard Spock (RPSLS) game
function rpsls(shot) {
    // Generating a random number between 0 and 4 (inclusive)
    let computer = Math.floor(Math.random() * 5);
    // Assigning the corresponding move to the computer based on the random number
    computer =
        computer === 0
            ? "rock"
            : computer === 1
                ? "paper"
                : computer === 2
                    ? "scissors"
                    : computer === 3
                        ? "lizard"
                        : "spock";

    // If the player doesn't provide a shot, return the computer's move
    if (shot == undefined) {
        return { player: computer };
    }

    let options = ["rock", "paper", "scissor", "lizard", "spock"];

    let user = shot.toLowerCase(); // Converting the player's shot to lowercase

    // Checking if the user's shot is a valid option
    if (!options.includes(user)) {
        console.error(`${shot} is not a valid choice.`); // Printing an error message if the shot is not a valid choice
        throw new RangeError(); // Throwing a RangeError
    }

    let result = "";
    
    if (computer === user) {
        result = "tie"; // If the moves of the computer and the player are the same, it's a tie
    } else if (
        // If the computer has certain moves and the player has certain moves, the player loses
        (computer === "rock" && user === "scissors") ||
        (computer === "paper" && user === "rock") ||
        (computer === "scissors" && user === "paper")
    ) {
        result = "lose";
    } else if (
        // If the computer has certain moves and the player has certain moves, the player loses
        (computer === "rock" && user === "lizard") ||
        (computer === "lizard" && user === "spock") ||
        (computer === "spock" && user === "rock")
    ) {
        result = "lose";
    } else if (
        // If the computer has certain moves and the player has certain moves, the player loses
        (computer === "spock" && user === "scissors") ||
        (computer === "scissors" && user === "lizard") ||
        (computer === "paper" && user === "spock") ||
        (computer === "lizard" && user === "paper")
    ) {
        result = "lose";
    } else {
        result = "win"; // If none of the above conditions are met, the player wins
    }
    
    // Returning an object with the player's move, opponent's move, and the result
    return { player: user, opponent: computer, result: result };
}