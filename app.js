//caching the dom elements
let userScore = 0;
let compScore = 0;
const scoreboardDiv = document.querySelector('.score');
let userscoreSpan = document.querySelector('#user-score');
const compscoreSpan = document.querySelector('#computer-score');
let resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

//getting the computer choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
//convert the choice letters to choice words
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//win function
function win(userChoice, computerChoice) {
  userScore++;
  userscoreSpan.innerHTML = userScore;
  compscoreSpan.innerHTML = compScore;
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
  userChoiceDiv.classList.add('green-glow');
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 300)
}

//lose function
function lose(userChoice, computerChoice) {
  compScore++;
  userscoreSpan.innerHTML = userScore;
  compscoreSpan.innerHTML = compScore;
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`
  userChoiceDiv.classList.add('red-glow');
  setTimeout(()=> userChoiceDiv.classList.remove('red-glow'), 300)
}
//draw function
function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice)}. Draw!`
  userChoiceDiv.classList.add('gray-glow');
  setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 300)
}
  


//plays the game with the user and computer choices
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}
//getting the user choice
function main() {
  rockDiv.addEventListener('click', () => {
    game('r')
  });

  paperDiv.addEventListener('click', () => {
    game('p')
  });
  scissorsDiv.addEventListener('click', () => {
    game('s')
  });
}

main();

