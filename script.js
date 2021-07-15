
// Global variables that keep track of score
let playerScore = 0;
let computerScore = 0;

// Prompt user for their choice of Rock, Paper, or Scissors, must be one of the three

let playerSelection = userSelection => userSelection;

// Function called computerPlay which randomly genereates what the Computer will play from Rock, Paper, or Scissors

let computerPlay = () => {
    let choices = ["rock", "paper", "scissors"];
    var randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};


// Function that determines who is the winner based off of Users selection versus Computers selection
let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return "You Lose! Computer chose Paper.";
        }

        if (computerSelection === "scissors") {
            playerScore++;
            return "You Win! Computer chose Scissors.";;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++
            return "You Lose! Computer chose Scissors.";
        }

        if (computerSelection === "rock") {
            playerScore++;
            return "You Win! Computer chose Rock.";;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++
            return "You Lose! Computer chose Scissors.";
        }

        if (computerSelection === "paper") {
            playerScore++;
            return "You Win! Computer chose Scissors.";;
        }
    }
};

// Winner of current round needs to be displayed with who chose who.
// When clicking a button, a score should appear for player and computer respectively
// Score keeps updating to 5 till a player wins
// Once one of the scores equals 5, new div should appear announcing winner.

let displayRoundWinner = playRound => {
    const winner = document.querySelector("#roundWinner");
    winner.textContent = playRound;
};

let updateScore = () => {
    const player = document.querySelector("#playerScore");
    player.textContent = `Your Score: ${playerScore}`;

    const computer = document.querySelector("#computerScore");
    computer.textContent = `Computer Score: ${computerScore}`;
};

let checkGameWinner = () => {
    const gameWinner = document.querySelector("#gameWinner");
    if (playerScore === 5) {
        gameWinner.textContent = "Game over! Player Wins!"
        return true;
    }

    if (computerScore === 5) {
        gameWinner.textContent = "Game over! Computer Wins!"
        return true;
    }

    return false;
};

let reset = () => {
    if (checkGameWinner()) {
        playerScore = 0;
        computerScore = 0;
        const winner = document.querySelector("#roundWinner");
        winner.textContent = "";
        const gameWinner = document.querySelector("#gameWinner");
        gameWinner.textContent = "";
    }
};

let game = e => {
    reset();
    displayRoundWinner(playRound(playerSelection(e.target.innerText.toLowerCase()), computerPlay()));
    updateScore();
    checkGameWinner();
};



const selections = document.querySelectorAll(".selection");

selections.forEach((selection) => {
    selection.addEventListener("click", game);
});



   


