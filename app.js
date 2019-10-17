const result = document.querySelector('.results');
const button = document.querySelectorAll('button');
const yourScore = document.querySelector('.yourScore');
const comScore = document.querySelector('.comScore');
const announcementText = document.querySelector('h2');
const announcement = document.querySelector('.announcement');
const playAgainBtn = document.createElement('button');

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

button.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        console.log(playerSelection); 

        if (!isGameOver()) {
            startRound();
        }
    }); 
});

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

function reset(){
    playAgainBtn.innerHTML = 'Play Again?';
    announcement.appendChild(playAgainBtn);

    playAgainBtn.addEventListener('click', () => {
        announcementText.textContent = 'First to 5 Wins!';
        result.textContent = 'Pick your choice to begin!';
        playerScore = 0;
        computerScore = 0;

        yourScore.textContent = 'Your score is 0';
        comScore.textContent = 'Computer score is 0';
        announcement.removeChild(playAgainBtn);
    });
}

function startRound(){
    playRound();

    if(isGameOver()){
        winner();
    }
}

function winner(){
    if(playerScore > computerScore){
        announcementText.textContent = 'Game Over! You Won!';
        reset();
    } else if(computerScore > playerScore){
        announcementText.textContent = 'Game Over! You Lost!';
        reset();
    }
}

function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    
    if (result == 1) {
        return 'rock'
    } else if (result == 2) {
        return 'paper'
    } else {
        return 'scissors';
    }          
}

function playRound(){
    console.log(playerScore);
    console.log(computerScore);

    if (playerSelection === computerSelection) {
        result.textContent = 'Draw!';

    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        result.textContent = 'Rock beats Scissors, you lost!';
        comScore.textContent = 'Computer Score is ' + computerScore;

    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++;
        result.textContent = 'Paper beats Rock, you won!';
        yourScore.textContent = 'Your Score is ' + playerScore;

    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerScore++;
        result.textContent = 'Scissors beats Paper, you won!';
        yourScore.textContent = 'Your Score is ' + playerScore;

    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        result.textContent = 'Paper beats Rock, you lost!';
        comScore.textContent = 'Computer Score is ' + computerScore;

    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        result.textContent = 'Scissors beats Paper, you lost!';
        comScore.textContent = 'Computer Score is ' + computerScore;

    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerScore++;
        result.textContent = 'Rock beats Scissors, you won!'
        yourScore.textContent = 'Your Score is ' + playerScore;
    } 
}