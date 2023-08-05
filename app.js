let playerScore = 0;
let computerScore = 0;
let computerScoreDiv = document.getElementById('computer-score');
let playerScoreDiv = document.getElementById('user-score');
let resultBoxDiv = document.querySelector('.result-box');

const playerChoiceButtons = document.querySelectorAll('.choice');

playerChoiceButtons.forEach((playerChoiceButton) => {
	playerChoiceButton.addEventListener('click', () => {
		playerSelection = playerChoiceButton.id;
		computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
	})
})


//get computer choice
function getComputerChoice(){
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	const choice = randomNumber === 1 ? 'rock' :
	(randomNumber === 2) ? 'paper' :
	'scissors';
	return choice;
}

//play round
function playRound(playerSelection, computerSelection){
	if(playerSelection === computerSelection){
		computerScoreDiv.textContent = computerScore;
playerScoreDiv.textContent = playerScore;

		resultBoxDiv.textContent = 'tie'
	}
	else if
	(playerSelection === 'rock' && computerSelection === 'scissors' ||
	playerSelection === 'paper' && computerSelection === 'rock' ||
	playerSelection === 'scissors' &&  computerSelection === 'paper'
	){
		playerScore++;
		computerScoreDiv.textContent = computerScore;
		playerScoreDiv.textContent = playerScore;

		resultBoxDiv.textContent = `You win! ${playerSelection} beat ${computerSelection}`;
	}
	else {
		computerScore++;
		computerScoreDiv.textContent = computerScore;
		playerScoreDiv.textContent = playerScore;

		resultBoxDiv.textContent = `You lose! ${computerSelection} beat ${playerSelection}`;
	}

	checkWinner();
		
}

function checkWinner(){
	if(playerScore === 5){
		resultBoxDiv.textContent = 'Wow. You won the Game';
		setTimeout(refreshPage, 3000);
	}
	else if(computerScore === 5){
		resultBoxDiv.textContent = 'Sorry! You lost the game!';
		setTimeout(refreshPage, 3000);
	}
}

function refreshPage(){
	location.reload();
}

// function game(){
// 	for(let i = 0; i < 5; i++){
// 		playerSelection = prompt('choice');
// 		computerSelection = getComputerChoice();
// 		console.log(playRound(playerSelection, computerSelection));
// 	}

// 	if(playerScore > computerScore){
// 		return 'You won the game'
// 	}
// 	else{
// 		return 'you lost the game';
// 	}
// 	// return `${playerScore, computerScore}` 
// } 

// console.log(game());