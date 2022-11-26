let playerCount = 0;
let computerCount = 0;
function computerPlay() {
  if (Math.floor(Math.random() * 3) + 1 === 1) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) + 1 === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerCount++;
      computerCount;
      return `Win! Rock beats Scissors. Computer played ${computerSelection}`;
    } else if (computerSelection === "paper") {
      playerCount;
      computerCount++;
      return `You Lose! Paper beats Rocks. Computer played ${computerSelection}`;
    } else {
      playerCount;
      computerCount;
      return "Tie! Computer played the same thing.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerCount++;
      computerCount;
      return `You Win! Paper beats Rock. Computer played ${computerSelection}`;
    } else if (computerSelection === "Scissor") {
      playerCount;
      computerCount++;
      return `You Lose! Scissors beats Paper. Computer played ${computerSelection}`;
    } else {
      playerCount;
      computerCount;
      return "Tie Computer played the same thing.";
    }
  } else {
    if (computerSelection === "rock") {
      playerCount;
      computerCount++;
      return `You Lose! Rock beats Scissors. Computer played ${computerSelection}`;
    } else if (computerSelection === "paper") {
      playerCount++;
      computerCount;
      return `You Win! Scissors beats Paper. Computer played ${computerSelection}`;
    } else {
      playerCount;
      computerCount;
      return "Tie! Computer played the same thing.";
    }
  }
}

let bothPlayersSelection = () => {
  playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  computerSelection = computerPlay();
};

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     console.log("Round " + i);
//     bothPlayersSelection();
//     console.log(playRound(playerSelection, computerSelection));
//     console.log("Player: ", playerCount);
//     console.log("Computer : ", computerCount);
//   }
// }

game();
console.log("Player: ", playerCount);
console.log("Computer : ", computerCount);
