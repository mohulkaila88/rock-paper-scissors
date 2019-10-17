let answers = ['rock','paper','scissors'];

function computerPlay(){
    return answers[Math.floor(Math.random() * answers.length)];
}

let playerSelection = prompt('Enter a choice','Rock, or Paper or Scissors');

function playRound(playerSelection, computerSelection){

    if(playerSelection != null){
        if (answers.includes(playerSelection)){
            checkWinner(playerSelection, computerSelection);
        } else {
            alert('Please enter either Rock, Paper or Scissors');
        }
    }else {
        alert('You have to provide a value!');
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert('It\'s a draw because computer also selected: ' + computerSelection);
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        alert('Computer wins this round, because computer selected: ' + computerSelection);
    } else if(playerSelection ==='rock' && computerSelection === 'scissors'){
        alert('Player wins this round because computer selected: ' + computerSelection);
    } else if(playerSelection ==='scissors' && computerSelection === 'rock'){
        alert('Computer wins this round because computer selected: ' + computerSelection);
    } else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        alert('Player wins this round because computer selected: ' + computerSelection);
    } else if(playerSelection ==='paper' && computerSelection === 'rock'){
        alert('Player wins this round because computer selected: ' + computerSelection);
    } else if(playerSelection ==='paper' && computerSelection === 'scissors'){
        alert('Computer wins this round because computer selected: ' + computerSelection);
    }
}

playRound(playerSelection,computerPlay());
