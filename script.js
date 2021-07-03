
// Prompt user for their choice of Rock, Paper, or Scissors, must be one of the three

function playerSelection() {
    let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection.toLowerCase();
   
    return playerSelection;
}


// Function called computerPlay which randomly genereates what the Computer will play from Rock, Paper, or Scissors

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    var randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


// Function that determines who is the winner based off of Users selection versus Computers selection
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a draw!";
    } 

    if(playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "You Lose! Paper beats Rock";
        }

        if (computerSelection === "scissors"){
            return "You Win! Rock beats Scissors";;
        }
    }

    if(playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return "You Lose! Scissors beats Paper";
        }

        if (computerSelection === "rock"){

            return "You Win! Paper beats Rock";;
        }
    }

    if(playerSelection === "scissors"){
        if (computerSelection === "rock"){

            return "You Lose! Rock beats Scissors";
        }

        if (computerSelection === "paper"){

            return "You Win! Scissors beats Paper";;
        }
    }
    }





// Function that can play multiple rounds of Rock, Paper, Scissors
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(), computerPlay()));
    }
}

// Simulating game
game();